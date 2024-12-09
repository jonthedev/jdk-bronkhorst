import { Suspense } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="absolute inset-0">
      <Suspense fallback={<div className="w-full h-full bg-black" />}>
        <ReactPlayer
          url={url}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          playsinline
        />
      </Suspense>
    </div>
  );
}
