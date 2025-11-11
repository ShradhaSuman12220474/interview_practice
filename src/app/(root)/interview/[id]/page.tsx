"use client";
import React, { useEffect, useState } from 'react'
import { Interview, RouteParams } from '../../../../../types'
import Image from 'next/image';
import DisplayTechIcons from '@/components/DisplayTechIcons';
import Agent from '@/components/Agent';
import { getRandomInterviewCover } from '@/lib/utils';
import { axiosInstance } from '@/lib/axiosInstance';
import { useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const page = () => {
   
    // const { id } = params; // or useParams() if you're in Next.js
    const params = useParams(); // ✅ not async
    const [interview, setInterviews] = useState<Interview|null>(null);
    const {user} = useAuth();
    useEffect(() => {
        console.log("helo");
  const fetchInterview = async () => {
    try {
      
      const res = await axiosInstance.get(`/interview/${params.id}`);
      console.log(res.data);
      setInterviews(res.data.data);
    } catch (err) {
      console.error("Error fetching interview:", err);
    }
  };

  fetchInterview();
}, [params.id]);
  return (
    <>
    {(!interview) ? (<p>Interview not found</p>) : 
    (<div>
    <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview?.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview!.techStack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview!.type}
        </p>
      </div>
      <Agent
        userName={user?.name!}
        userId={user?.id}
        interviewId={params.id?.toString()}
        type="interview"
        questions={interview.questions}
        // feedbackId={feedback?.id}
      />
    </div>)}
    </>
  )
}

export default page