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
        }, [isAuthenticated]);
  return (
    <div>
        <AuthForm type="sign-up"/>

    </div>
  )
}

export default page