import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileVideo, Download } from "lucide-react";

interface VideoCardProps {
  title: string;
  duration: string;
  uploadedDate: string;
  onDownload?: () => void;
}

export const VideoCard = ({ title, duration, uploadedDate, onDownload }: VideoCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <FileVideo className="h-8 w-8 text-blue-500" />
          <Button variant="ghost" size="sm" onClick={onDownload}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>Duration: {duration} • Uploaded {uploadedDate}</CardDescription>
      </CardContent>
    </Card>
  );
};
