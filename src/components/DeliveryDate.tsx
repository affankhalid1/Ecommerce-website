// components/DeliveryDate.tsx
import React from "react";

interface DeliveryDateProps {
  zipCode: string; // The destination zip code
  deliveryDays?: number; // Optional, default is 3 days
}

const DeliveryDate: React.FC<DeliveryDateProps> = ({ zipCode, deliveryDays = 3 }) => {
  // Calculate the delivery date
  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + deliveryDays);
    return currentDate.toLocaleDateString("en-US", {
      weekday: "short", // e.g., Thu
      month: "short",   // e.g., Jan
      day: "numeric",   // e.g., 30
    });
  };

  const deliveryDate = calculateDeliveryDate();

  return (
    <div className="border rounded-md p-4 shadow-md flex items-center justify-between">
      <div>
        <span className="text-[#11551f] py-0.5 px-1 bg-[#6fb17c2f]  text-sm font-semibold">FREE {deliveryDays}-Day Delivery</span>
        <p className="text-black font-bold text-sm mt-1">
          Get it by <span className="">{deliveryDate}</span> <span className="font-normal">to</span>{" "}
          <span className="text-[#029FAE]  underline">{zipCode}</span>
        </p>
      </div>
      <div className="text-gray-500 cursor-pointer">&gt;</div>
    </div>
  );
};

export default DeliveryDate;
