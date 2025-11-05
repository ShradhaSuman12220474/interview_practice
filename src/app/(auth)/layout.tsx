"use client"
import {ReactNode, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';

const AuthLayout = ({children} : {children:ReactNode}) => {
  return (
    <div className='auth-layout'>
     
            {children}
     
    </div>
  )
}

export default AuthLayout;