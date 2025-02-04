import React, { useState } from "react";
import DOMPurify from "dompurify";
import Image from "next/image";

interface DescriptionProps {
  title: string;
  content: string; // Raw HTML as a string
}

const DescriptionHtml: React.FC<DescriptionProps> = ({ title, content }) => {
  const [isHidden, setIsHidden] = useState(true); // Initial state: All content hidden
  const [isExpanded, setIsExpanded] = useState(false); // Tracks "See More/Less" toggle

  // Sanitize content before using it
  const sanitizedContent = DOMPurify.sanitize(content);

  const toggleHidden = () => {
    setIsHidden((prev) => !prev);
    if (!isHidden) {
      setIsExpanded(false); // Reset "See More/Less" state
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border rounded-md p-4 shadow-md">
      {/* Title */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleHidden}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {isHidden ? <Image src="/Svg/arrowdownward.svg" alt="Down Arrow" width={30} height={30} /> : <Image src="/Svg/arrowupward.svg" alt="Up Arrow" width={30} height={30} />}
      </div>

      {/* Content */}
      {!isHidden && (
        <div className="text-gray-700 mt-2">
          {isExpanded ? (
            // Fully expanded content
            <>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
              <button
                onClick={toggleExpand}
                className="mt-2 text-purple-600 underline"
              >
                See Less
              </button>
            </>
          ) : (
            // Initial 3 lines of content
            <>
              <div
                className="line-clamp-3 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
              <button
                onClick={toggleExpand}
                className="mt-2 text-purple-600 underline"
              >
                See More
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DescriptionHtml;
