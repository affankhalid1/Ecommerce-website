import React, { useState } from "react";

interface DescriptionProps {
  title: string;
  content: string;
  maxContentLength?: number; // Maximum length before truncating
}

const Description: React.FC<DescriptionProps> = ({ title, content, maxContentLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded/collapsed state
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Determine the displayed content
  const displayedContent = isExpanded ? content : `${content.substring(0, maxContentLength)}...`;

  return (
    <div className="border rounded-md p-4 shadow-md">
      {/* Title */}
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleExpand}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-500">{isExpanded ? "▲" : "▼"}</span>
      </div>

      {/* Content */}
      {isExpanded && (
        <p className="text-gray-700 mt-2">
          {displayedContent}
          {content.length > maxContentLength && (
            <button
              onClick={toggleExpand}
              className="ml-2 text-purple-600 underline"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
      )}
    </div>
  );
};

export default Description;
