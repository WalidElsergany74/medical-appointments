"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { LogOut, Menu, XIcon } from 'lucide-react'
import {  usePathname, useRouter } from 'next/navigation'
import {  Routes } from '@/constants'
import Link from '../link'
import Image from 'next/image'
import logo from "../../../public/assests/logo.webp"
import AuthButtons from './AuthButtons'
import { useClientSession } from '@/hooks/useClientSession'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'



const Navbar = ({ initialSession }: { initialSession: Session | null }) => {
    const [openMenu, setOpenMenu] = useState(false)
       const pathname = usePathname()
       const session = useClientSession(initialSession)
    
        
    const links = [
        {id : crypto.randomUUID() , title : "Home" , href : Routes.ROOT},
        {id : crypto.randomUUID() , title : "Doctors" , href : Routes.DOCTORS},
        {id : crypto.randomUUID() , title : "My Reversations", href : Routes.REVERSATION}
        
        
    ]
  return (
    <nav className="flex  justify-center">
    <div className="flex-1 flex mx-5 justify-end w-full">
      {session.data?.user ?  <span className='text-primary me-2 flex items-center'>{session.data.user.username}</span>
      
      : ""}
    <Button
        variant={"secondary"}
        size={"sm"}
        className="lg:hidden "
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
    </div>
      <ul
        className={`
        ${openMenu ? "left-0 z-50" : "-left-full"}
        fixed lg:static top-0 flex px-10 py-8 lg:p-0  bg-background  lg:bg-transparent transition-all flex-col lg:flex-row gap-10 w-full lg:w-auto items-start lg:items-center`}
      >
      <div className="flex items-center justify-between w-full lg:hidden">
        <Image src={logo} alt="logo" width={200} height={150} />
      <Button
          variant={"secondary"}
          size={"sm"}
          className="lg:hidden "
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
      </div>

        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={`${
                `hover:text-primary duration-200 transition-colors font-medium ${pathname === `${link.href}` ? "text-primary" : ""}`
              }`}
              href={`${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
               {session.data?.user && (
                <li>
                <Button onClick={() => signOut()} className="flex lg:hidden items-center cursor-pointer hover:text-primary duration-200 transition-colors font-semibold">
                 Logout
                </Button>
              </li>
               )}
     {!session?.data?.user && (
          <>
            <li className="lg:hidden flex flex-col gap-4">
              <div onClick={() => setOpenMenu(false)}>
                <AuthButtons initialSession={initialSession} />
              </div>
            </li>
          </>
        )}
      </ul>
      
    </nav>
  );
}

export default Navbar