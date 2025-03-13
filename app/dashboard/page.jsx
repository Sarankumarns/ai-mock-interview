import { UserButton } from '@clerk/nextjs';
import React from 'react';
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/interviewList';
import Image from 'next/image';

function Dashboard() {
  return (
    <div className="p-10 bg-gray-300">
      <h2 className="font-bold text-2xl text-black">Start Your pratice</h2>
      <h2 className="text-black">Create and Start your AI Mock Interview</h2>

      
      <div className="flex my-5 space-x-40"> 
      
        <div className="flex-none w-full md:w-2/3 lg:w-2/5 mt-10 ">
          <AddNewInterview />
        </div>
        <div className="flex-none w-full md:w-1/3 lg:w-3/5 relative ml-12"> 
          <Image
            src="/interview.webp"  
            alt="AI Mock Interview"
            layout="intrinsic" 
            height={200} 
            width={500}  
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <InterviewList />
    </div>
  );
}

export default Dashboard;
