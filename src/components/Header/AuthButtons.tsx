"use client"

import React from 'react'
import { Button } from '../ui/button'
import {  useRouter } from 'next/navigation';
import { Pages, Routes } from '@/constants';
import { useClientSession } from '@/hooks/useClientSession';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

const AuthButtons = ({ initialSession }: { initialSession: Session | null }) => {
  const router = useRouter();
  const session =  useClientSession(initialSession)

  return (
    <div className=' items-center justify-end space-x-3 '>
    {!session.data?.user ? (
  <>
    <Button  
      onClick={() => router.push(`/${Routes.AUTH}/${Pages.LOGIN}`)}
      className="bg-secondary-600 shadow-lg text-primary" 
      size="md" 
      variant="outline"
    >
      Login
    </Button>
    
    <Button  
      onClick={() => router.push(`/${Routes.AUTH}/${Pages.Register}`)}
      className="shadow-lg" 
      size="md" 
      variant="default"
    >
      Sign Up
    </Button>
  </>
) : (
  <Button onClick={() => signOut()}>Logout</Button>
)}

    </div>
  )
}

export default AuthButtons