// components/NumericStepper.tsx
import React, { useState } from "react";

interface NumericStepperProps {
  min?: number; // Minimum value
  max?: number; // Maximum value
  step?: number; // Step increment/decrement
  initialValue?: number; // Default starting value
}

const NumericStepper: React.FC<NumericStepperProps> = ({
  min = 1,
  max = 10,
  step = 1,
  initialValue = 1,
}) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    if (value + step <= max) {
      setValue(value + step);
    }
  };

  const decrement = () => {
    if (value - step >= min) {
      setValue(value - step);
    }
  };

  return (
    <div className="flex items-center border w-40 rounded-full h-10">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        className="w-8 h-full flex items-center px-6 border border-black  rounded-l-full justify-center text-2xl text-gray-600 hover:bg-gray-100 disabled:text-gray-300"
        disabled={value <= min}
      >
        −
      </button>

      {/* Value Display */}
      <input
        type="text"
        value={value}
        readOnly
        className="w-full text-center border-x-0 border h-full  border-black outline-none text-gray-800"
      />

      {/* Increment Button */}
      <button
        onClick={increment}
        className="w-10 h-full flex items-center px-6 border border-black rounded-r-full justify-center text-2xl text-gray-600 hover:bg-gray-100 disabled:text-gray-300"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default NumericStepper;
