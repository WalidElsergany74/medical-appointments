import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import hero from "../../../public/assests/me.png"
import Link from 'next/link'


const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-5  '>
      {/* Left Side - Text */}
      <div className='flex flex-col gap-4 '>
        <h5 className='font-medium py-2 md:py-3'>- The Best Health Solution</h5>
        <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>
          Optimal <span className='text-primary'>Health</span>, One Click Away
        </h1>
        <p className='text-lg py-2 md:py-3 md:max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, justo in tincidunt luctus,
          metus tellus ultricies nunc, nec vestibulum sapien nunc nec sapien.
        </p>
   
      <Link href={"/doctors"}>
      <Button className='rounded-full w-fit !px-8' size={"lg"}>Book Appointment</Button>
      </Link>
      
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center md:justify-end">
        <Image 
          src={hero} 
          alt='Doctor'
          width={300}
          height={300}
          className='w-full md:w-[75%] object-cover'
        />
      </div>
    </section>
  )
}

export default Hero
