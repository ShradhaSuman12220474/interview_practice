
"use client"
import  { ReactNode, useEffect } from 'react'

import { redirect, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
const layout = ({children} : {children:ReactNode}) => {
    const router = useRouter();
        const { isAuthenticated } = useAuth();
          useEffect(() => {
            if (!isAuthenticated) redirect("/sign-in");
        }, [isAuthenticated]);
  return (
   <div className="root-layout">
        {children}
    </div>
  )
}

export default layout