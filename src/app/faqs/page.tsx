import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='my-32'>
      <div className='flex flex-col gap-6 items-center  mb-16'>
        <div className='text-4xl font-bold text-[#333333]'>Questions Looks Here</div>
        <div className='text-center text-[#4F4F4F]'>Have questions? Find answers to common queries about our products, warranties, and delivery, or contact us for more help!</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-5 my-16 '>

      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>
      <div className='flex flex-col gap-5 bg-[#F7F7F7] p-5 rounded-lg'>
        <div className='flex justify-between'>
          <div className='text-[#333333] text-lg font-bold'>What types of chairs do you offer?</div>
          <Image src = "/Svg/Plus.svg" width={20} height={20} alt=""/>
        </div>
        <div className='text-[#4F4F4F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</div>
      </div>

      </div>
    </div>
  )
}

export default page
