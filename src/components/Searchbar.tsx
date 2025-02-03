"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string;
  onsearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onsearch }) => {
  const router = useRouter()

  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if(query){
      router.push(`/search/${query}`)
    if (query.trim()) {
      onsearch(query);
    }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (query) {
        handleSearch();
      router.push(`/search/${query}`)
      }
    }
  };
  
  return (
    <div className="flex items-center w-full max-w-md mx-auto ">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Use onKeyDown instead of onKeyPress
        placeholder={placeholder}
        className="flex-grow w-full px-4 py-2 border border-gray-300 rounded-md xs:rounded-l-md xs:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#007580]"
      />


      <button
        onClick={handleSearch}
        className="px-4 py-2 hidden xs:block text-white bg-[#007580] rounded-r-md hover:bg-[#1d5e64] focus:outline-none focus:ring-2 focus:ring-[#007580]"
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;

