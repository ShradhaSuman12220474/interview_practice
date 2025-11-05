import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { dummyInterviews } from '../../../constants'

const page = () => {
    // const [userInterviews, allInterview] = await Promise.all([
    //     getInterviewsByUserId(user?.id!),
    //     getLatestInterviews({ userId: user?.id! }),
    // ]);
    // const hasPastInterviews = userInterviews?.length! > 0;
    // const hasUpcomingInterviews = allInterview?.length! > 0;
    const hasPastInterviews = true;
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
        <div className='interviews-section'>
            {dummyInterviews.map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
            )
            )}
        </div>
    </section>

    <section className='flex flex-col gap-6 mt-8'>

        <h2>Take Interview</h2>
        <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
                <InterviewCard {...interview} key={interview.id}/>
            )
            )}
        </div>
    </section>
    </>
  )
}

export default page