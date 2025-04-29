import React, { useState } from "react";

interface CustomYoutubeProps {
  id: string;
  title: string;
  [key: string]: any;
}

const CustomYoutube: React.FC<CustomYoutubeProps> = ({
  id,
  title,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onThumbClick = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="youtube-container relative rounded-lg overflow-hidden"
      style={{ paddingBottom: "56.25%", height: 0 }}
    >
      {!isLoaded ? (
        <button
          type="button"
          className="youtube-thumbnail absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
          aria-label={`Reproducir: ${title}`}
          onClick={onThumbClick}
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="play-button w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...rest}
        ></iframe>
      )}
    </div>
  );
};

export default CustomYoutube;
