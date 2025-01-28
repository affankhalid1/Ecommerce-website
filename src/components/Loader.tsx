'use client';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-[#029FAE] rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-[#029FAE] rounded-full animate-bounce delay-300"></div>
        <div className="w-4 h-4 bg-[#029FAE] rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loader;
