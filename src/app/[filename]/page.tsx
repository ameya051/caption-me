"use client";
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor, {
  TScriptItems,
} from "@/components/TranscriptionEditor";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios";
import { useEffect, useState } from "react";

interface FilePageProps {
  params: {
    filename: string;
  };
}

export default function FilePage({ params }: FilePageProps) {
  const { filename } = params;
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isFetchingInfo, setIsFetchingInfo] = useState(false);
  const [awsTranscriptionItems, setAwsTranscriptionItems] = useState<
    TScriptItems[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let pollInterval: NodeJS.Timeout;
    let mounted = true;

    async function pollTranscription() {
      try {
        setIsFetchingInfo(true);
        const response = await axios.get(
          `http://localhost:8000/api/transcribe?filename=${filename}`
        );
        
        if (!mounted) return;

        const { status, transcription } = response.data;
        
        if (status === "IN_PROGRESS") {
          setIsTranscribing(true);
          pollInterval = setTimeout(pollTranscription, 3000);
        } else {
          setIsTranscribing(false);
          setAwsTranscriptionItems(
            clearTranscriptionItems(transcription?.results?.items)
          );
        }
      } catch (err) {
        if (!mounted) return;
        setError(err instanceof Error ? err.message : 'An error occurred');
        setIsTranscribing(false);
      } finally {
        if (mounted) {
          setIsFetchingInfo(false);
        }
      }
    }

    pollTranscription();

    // Cleanup function
    return () => {
      mounted = false;
      clearTimeout(pollInterval);
    };
  }, [filename]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (isTranscribing) {
    return <div>Transcribing your video...</div>;
  }

  if (isFetchingInfo) {
    return <div>Fetching information...</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
        <div className="">
          <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
          <TranscriptionEditor
            awsTranscriptionItems={awsTranscriptionItems}
            setAwsTranscriptionItems={setAwsTranscriptionItems}
          />
        </div>
        <div>
          <h2 className="text-2xl mb-4 text-white/60">Result</h2>
          <ResultVideo
            filename={filename}
            transcriptionItems={awsTranscriptionItems}
          />
        </div>
      </div>
    </div>
  );
}
