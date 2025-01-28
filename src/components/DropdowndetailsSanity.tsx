import React, { useState } from "react";
import { PortableText } from "@portabletext/react";

interface DescriptionProps {
  title: string;
  content: any[]; // Accept Sanity's block content
}

const Description: React.FC<DescriptionProps> = ({ title, content }) => {
  const [isHidden, setIsHidden] = useState(true); // Initial state: All content hidden
  const [isExpanded, setIsExpanded] = useState(false); // Tracks "See More/Less" toggle

  const toggleHidden = () => {
    setIsHidden((prev) => !prev);
    if (!isHidden) {
      // Reset to default collapsed state when hiding all content
      setIsExpanded(false);
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
        <span className="text-gray-500">{isHidden ? "▼" : "▲"}</span>
      </div>

      {/* Content */}
      {!isHidden && (
        <div className="text-gray-700 mt-2">
          {isExpanded ? (
            // Fully expanded content
            <>
              <PortableText value={content} />
              <button
                onClick={toggleExpand}
                className="mt-2 text-[#029FAE] underline"
              >
                See Less
              </button>
            </>
          ) : (
            // Initial 3 lines of content
            <>
              <div className="line-clamp-3 overflow-hidden">
                <PortableText value={content} />
              </div>
              <button
                onClick={toggleExpand}
                className="mt-2 text-[#029FAE] underline"
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

export default Description;
