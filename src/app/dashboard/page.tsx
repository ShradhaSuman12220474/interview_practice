"use client";
import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Interview } from '../../../types';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axiosInstance';
import { useAuth } from '@/context/AuthContext';

// import { useEffect } from 'react'

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

const page = () => {
    // const [userInterviews, allInterview] = await Promise.all([
    //     getInterviewsByUserId(user?.id!),
    //     getLatestInterviews({ userId: user?.id! }),
    // ]);
    // const hasPastInterviews = userInterviews?.length! > 0;
    // const hasUpcomingInterviews = allInterview?.length! > 0;
    // const hasPastInterviews = true;
    const [interviews, setInterviews] = useState<Interview[]>([]);
    const {user} = useAuth();
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        console.log(user!.userId);
        if(user){
            const res = await axiosInstance.get('/interview',{ params: { userId: user.userId }}); // or /interview?userId=...
            setInterviews(res.data.data);
            console.log(res);
        }
      } catch (err) {
        console.error("Error fetching interviews:", err);
      }
    };

    fetchInterviews();
  }, []); // 👈 empty array = run once
  return (
    <>

    <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Get Interview Ready with AI-powered practice and feedback</h2>
            <p className='text-lg'>Practice real interview question & get intant feedback</p>
            <Button asChild className="btn-primary max-sm:w-full">
                <Link href='/interview' > Start an Interview</Link>
            </Button>
        </div>

        <Image
        src="/robot.png"
        alt="robo-dude"
        width={400}
        height={400}
       />
    </section>

    <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interview</h2>
        {/* This will show all the interviews that you have generated */}
        <div className='interviews-section'>
            {interviews.map((interview)=>(
                <InterviewCard {...interview} key={interview._id}/>
            )
            )}
        </div>
    </section>

    <section className='flex flex-col gap-6 mt-8'>

        <h2>Take Interview</h2>
        {/* This will display the public interviews */}
        <div className='interviews-section'>
        {interviews.map((interview)=>(
                <InterviewCard {...interview} key={interview._id}/>
            )
            )}
        </div>
    </section>
    </>
  )
}

export default page