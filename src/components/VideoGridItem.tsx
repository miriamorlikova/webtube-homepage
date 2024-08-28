import { useEffect, useRef, useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    name: string;
    id: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat("en-us", {
  notation: "compact",
});

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-300 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        <div className="absolute right-1 bottom-1 bg-secondary-dark text-secondary text-xs p-0.5 rounded">
          {formatDuration(duration)}
        </div>
        <video
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-300 ${
            isVideoPlaying ? "opacity-100 delay-300" : "opacity-0"
          }`}
        />
      </a>
      <div className="flex gap-2 ">
        <a href={`/watch?=v${channel.id}`} className="flex-shrink-0">
          <img className="w-10 h-10 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col gap-1">
          <a
            href={`/watch?v=${id}`}
            className="font-bold tracking-tighter leading-5"
          >
            {title}
          </a>
          <a href={`/watch?v=${id}`} className="text-secondary-text text-xs">
            {channel.name}
          </a>
          <div className="text-secondary text-xs">
            {VIEW_FORMATTER.format(views)} Views · {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}
