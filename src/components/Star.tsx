import React from "react";

type StarRatingProps = {
  rating: number; // Rating value, e.g., 3.8 or 4.2
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if there’s a half star
  const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="stars text-2xl font-[550] flex items-center">
      {/* Filled stars */}
      {Array.from({ length: filledStars }, (_, i) => (
        <span key={`filled-${i}`} className="text-black">
          &#9733;
        </span>
      ))}
      {/* Half star */}
      {hasHalfStar && (
        <span className="text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path d="M12 15.4V4.6l2.37 5.9h6.63l-4.25 3.66 1.6 6.84L12 15.4z" className="fill-gray-300" />
          </svg>
        </span>
      )}
      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
