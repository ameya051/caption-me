import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const runtime = 'edge'

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const fileSize = searchParams.get("fileSize");
    const fileType = searchParams.get("fileType");
    if (fileType !== "video/mp4")
      return NextResponse.json(
        { error: "Invalid file format" },
        { status: 400 }
      );
    if (parseInt(fileSize as string) > 10485760)
      return NextResponse.json(
        { error: "Invalid file size. Upload files smaller than 10 MB" },
        { status: 400 }
      );
    const s3Client = new S3Client({
      region: process.env.BUCKET_REGION,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY!,
        secretAccessKey: process.env.SECRET_ACCESS_KEY!,
      },
    });
    const fileName = crypto.randomUUID();
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME!,
      Key: fileName,
    });
    const url = await getSignedUrl(
      s3Client,
      putObjectCommand,
      { expiresIn: 60 } // 60 seconds
    );
    return NextResponse.json({ url: url, fileName: fileName }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: "Error uploading file",
    });
  }
}
