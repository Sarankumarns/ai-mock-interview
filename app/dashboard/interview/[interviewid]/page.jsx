"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({ params }){

    const[interviewData,setInterviewData]=useState();
    const[webcamEnabled,setWebCamEnabled]=useState();

    useEffect(()=>{
        console.log(params);
        GetInterviewDetails();
    },[]);

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewid));
        console.log({result});

    setInterviewData(result[0]);

    };
  return (
    <div className='my-10'>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
       
        <div className='flex flex-col my-5 gap-5  '>
            <div className=' flex flex-col p-5 rounded-lg border gap-5'>
            <h2 className='text-lg'><strong>Job Role/Job Position:</strong>{interviewData?.jobPosition}</h2>
            <h2 className='text-lg'><strong>Job Description/Job Role:</strong>{interviewData?.jobDesc}</h2>
            <h2 className='text-lg'><strong>Years of experience:</strong>{interviewData?.jobExperience}</h2>
            </div>
            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
            <h2 className='flex gap-2 iteams-center text-yellow-600'> <Lightbulb/><strong>Information</strong></h2> 
               <h2 className='mt-3 text-yellow-600'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
            </div>
        </div>
        <div>
       {webcamEnabled? <Webcam
       onUserMedia={()=>setWebCamEnabled(true)}
       onUserMediaError={()=>setWebCamEnabled(false)}
       mirrored={true}
       style={{
        height:500,
        width:500 

       }}
       />
       :
       <>
        <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border '/>
       <Button className='w-full p-5'onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
       </>
       }
        </div>
        </div>
       <div className='flex justify-end item-end mt-7'>
        < Link href={'/dashboard/interview/'+params.interviewid+'/start'}>
        <Button >Start Interview</Button>
        </Link>
        </div>
    </div>
  )
}

export default Interview;