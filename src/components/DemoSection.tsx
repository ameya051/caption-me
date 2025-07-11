import SparklesIcon from "@/components/SparklesIcon";

export default function DemoSection() {
  return (
    <section className="flex justify-around mt-8 sm:mt-12 items-center gap-4">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://caption-me-s3-bucket.s3.ap-south-1.amazonaws.com/without-captions.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video
          src="https://caption-me-s3-bucket.s3.ap-south-1.amazonaws.com/with-captions.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
      </div>
    </section>
  );
}
