"use client"
import AuthForm from '@/components/AuthForm'
import { useAuth } from '@/context/AuthContext';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';


const page = () => {
    const router = useRouter();
        const { isAuthenticated } = useAuth();
          useEffect(() => {
            if (isAuthenticated) redirect("/dashboard");
            // else router.push('/dashboard');
        }, [isAuthenticated]);
  return (
    <div>
        <AuthForm type="sign-in"/>
    </div>
  )
}

export default page