import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='my-20 sm:my-32'>
      <div className='flex flex-col gap-4 sm:gap-6 items-center  mb-16'>
        <div className='text-xl sm:text-4xl font-bold text-[#333333] text-center'>Questions Looks Here</div>
        <div className='text-center text-[#4F4F4F] text-sm sm:text-base'>Have questions? Find answers to common queries about our products, warranties, and delivery, or contact us for more help!</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-5 my-16 '>

      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>What types of chairs do you offer?</div>
          <Image className='w-[16px] h-[16px] mt-0.5  sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>We offer a wide range of chairs, including dining chairs, office chairs, lounge chairs, and accent chairs, all designed to blend comfort and style for any space.</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>Do your chairs come with a warranty?</div>
          <Image className='w-[16px] h-[16px] mt-0.5 sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>Yes, all our chairs come with a standard warranty that covers manufacturing defects. Specific terms may vary depending on the product.</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>Can I try a chair before purchasing?</div>
          <Image className='w-[16px] h-[16px] mt-0.5 sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>We offer a showroom experience at select locations where you can test our chairs. If unavailable in your area, our return policy ensures a risk-free online purchase.</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>How can we get in touch with you?</div>
          <Image className='w-[16px] h-[16px] mt-0.5 sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>You can reach us via phone at (808) 555-0111, email at support@comforty.com, or use the contact form on our website for quick assistance.</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>What will be delivered? And when?</div>
          <Image className='w-[16px] h-[16px] mt-0.5 sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>Your order will include the selected chair(s) and any applicable accessories. Delivery typically takes 3-7 business days, depending on your location.</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-md sm:rounded-lg'>
        <div className='flex justify-between items-start'>
          <div className='text-[#333333] text-sm sm:text-lg font-bold'>How do I clean and maintain my Comforty chair?</div>
          <Image className='w-[16px] h-[16px] mt-0.5 sm:w-[20px] sm:h-[20px]' src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F] text-xs sm:text-base'>To clean, use a soft cloth with mild soap and water. For upholstered chairs, use fabric-safe cleaners. Avoid harsh chemicals to maintain the quality of the material.</div>
      </div>

      </div>
    </div>
  )
}

export default Page
