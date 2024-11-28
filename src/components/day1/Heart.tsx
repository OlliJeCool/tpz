import { useState, useEffect } from "react";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";

interface HeartButtonProps {
  isLiked: boolean;
  onLikeToggle: (newState: boolean) => void;
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({ isLiked, onLikeToggle, className = "" }) => {
  const [liked, setLiked] = useState(isLiked);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const toggleLike = () => {
    const newState = !liked;
    setLiked(newState);
    onLikeToggle(newState);

    // Trigger the pop animation
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 300); // Animation duration
  };

  return (
    <button
      onClick={toggleLike}
      className={`relative transition-transform duration-300 ease-in-out transform ${liked ? "scale-110" : "scale-100"} text-3xl ${className}`}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center z-0 ${
          isPopping ? "animate-pop" : ""
        }`}
      >
        {liked ? (
          <SolidHeartIcon className="w-12 h-12 text-red-500" />
        ) : (
          <OutlineHeartIcon className="w-12 h-12 text-gray-500 hover:text-red-500 transition-colors" />
        )}
      </span>
    </button>
  );
};

export default HeartButton;
