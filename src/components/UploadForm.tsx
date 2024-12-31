"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useState } from "react";
import UploadIcon from "@/components/UploadIcon";

const UploadForm: FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  
  const upload = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    try {
      if (files && files.length > 0 && files[0].size > 10485760) {
        console.log("Give file less than 10 mb");
      } else if (files && files.length > 0) {
        const file = files[0];
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/presigned?fileSize=${file.size}&fileType=${file.type}`,
          {
            method: "PUT",
          }
        );
        //handle the error
        if (!res.ok) throw new Error(await res.text());
        const preSignedUrl = await res.json();
        if (preSignedUrl.status===429) router.push("/blocked");
        else {
          setIsUploading(true);
          const response = await fetch(preSignedUrl.url, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
            },
            body: file,
          });
          if (!response.ok) throw new Error(await response.text());
          else {            
            setIsUploading(false);
            router.push("/" + preSignedUrl.fileName);
          }
        }
        setIsUploading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
        <UploadIcon />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
};

export default UploadForm;
