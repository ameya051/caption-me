import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import api from "@/lib/axios";

interface UseFileUploadOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

const getPresignedUrl = async (file: File, name: string) => {
  const fileName = name || file.name;
  const response = await api.put(
    `/api/presigned?fileName=${fileName}&fileSize=${file.size}&fileType=${file.type}`
  );
  return response.data.url;
};

const uploadToS3 = async (url: string, file: File) => {
  await fetch(url, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });
};

export const useFileUpload = ({ onSuccess, onError }: UseFileUploadOptions = {}) => {
  const mutation = useMutation({
    mutationFn: async ({ file, title }: { file: File; title: string }) => {
      const presignedUrl = await getPresignedUrl(file, title);
      await uploadToS3(presignedUrl, file);
      return { success: true };
    },
    onSuccess: () => {
      toast.success("Video uploaded successfully!");
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Upload failed:", error);
      toast.error("Upload failed. Please try again.");
      onError?.(error);
    },
  });

  return {
    uploadFile: mutation.mutate,
    isUploading: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
};
