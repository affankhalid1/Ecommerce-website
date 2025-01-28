import React from "react";

type DiscountCalculatorProps = {
  actualPrice: number; // The original price of the item
  discountedPrice: number; // The price after the discount
};

const DiscountCalculator: React.FC<DiscountCalculatorProps> = ({
  actualPrice,
  discountedPrice,
}) => {
  if (actualPrice <= 0 || discountedPrice < 0 || discountedPrice > actualPrice) {
    return <p className="text-red-500">Invalid price values</p>;
  }

  // Calculate the discount percentage
  const discountPercentage = (
    ((actualPrice - discountedPrice) / actualPrice) *
    100
  ).toFixed(0); // Round to 2 decimal places

  return (
    <div className="flex items-baseline space-x-2">
      {/* Discount Percentage */}
      <span className="text-[#b12929]  font-medium">
        {discountPercentage}% Off
      </span>
    </div>
  );
};

export default DiscountCalculator;
