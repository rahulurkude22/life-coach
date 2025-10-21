import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

interface VideoThumbnailProps {
  thumbnail: string; // image thumbnail URL
  videoUrl: string; // video URL
  title?: string; // optional title/caption
}

function VideoThumbnail({ thumbnail, videoUrl, title }: VideoThumbnailProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Thumbnail Card */}
      <div
        className="video-thumbnail"
        onClick={() => setIsOpen(true)}
        role="button"
        aria-label={`Play video ${title || ""}`}
      >
        <img
          src={thumbnail}
          alt={title || "Video thumbnail"}
          className="video-thumbnail__image"
        />

        {/* Play Button Overlay */}
        <div className="video-thumbnail__overlay">
          <div className="video-thumbnail__play">&#9658;</div>
        </div>
      </div>

      {/* Modal Video Player */}
      <VideoPlayer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
}

export default VideoThumbnail;
