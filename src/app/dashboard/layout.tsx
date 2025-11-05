
"use client"
import Image from 'next/image'
import Link from 'next/link'
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
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
      </nav>
        {children}
    </div>
  )
}

export default layout