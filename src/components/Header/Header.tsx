import React from 'react'
import Link from '../link'
import Navbar from './Navbar'
import { Routes } from '@/constants'
import logo from "../../../public/assests/logo.webp"
import Image from 'next/image'
import AuthButtons from './AuthButtons'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/auth'

const Header = async () => {
  const initialSession = await getServerSession(authOptions)
 
  
  return (
    <header className='py-3 px-6 lg:px-8 bg-gray-50'>
        <div className="container max-w-6xl mx-auto  flex justify-between items-center ">
            <Link className='text-primary font-semibold text-2xl' href={`/${Routes.ROOT}`}> 
            <Image src={logo} alt='logo' width={200} height={150}/>
            </Link>
            <Navbar initialSession={initialSession}  />
           <div className="lg:block hidden">
           <AuthButtons initialSession={initialSession}/>
           </div>
        </div>
    </header>
  )
}

export default Header