"use client";
import Agent from '@/components/Agent'
import { useAuth } from '@/context/AuthContext'


const page = () => {
    const {user} = useAuth()
  return (
    <>
    <h3>
        Interview Generation
    </h3>
    <Agent
    userName={user?.name}
    userId={user?.userId}
    type="generate"
    ></Agent>
    </>
  )
}

export default page;