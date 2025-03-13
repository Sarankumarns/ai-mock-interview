"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAiModal'
import { LoaderCircle, Router } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false)
    const [jobPositon,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [Loading,setLoading]=useState(false); 
    const [jsonresponse,setJsonResponse]=useState([]);
    const router=useRouter();
    const {user}=useUser();


    const onSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPositon,jobDesc,jobExperience)

        const InputPrompt="Job position:"+jobPositon+", Job Description:"+jobDesc+", Years of Experience:"+jobExperience+", Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTIONS_COUNT+" Interview question along with Answer in JSON format, Give us question and answer field on JSON";

        const result=await chatSession.sendMessage(InputPrompt);
        const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
        console.log(JSON.parse(MockJsonResp));
        setJsonResponse(MockJsonResp);
        if(MockJsonResp)
        {
        const resp=await db.insert(MockInterview).values({
            mockId:uuidv4(),
            jsonMockResp:MockJsonResp,
            jobPosition:jobPositon,
            jobDesc:jobDesc,
            jobExperience:jobExperience,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            CreatedAt:moment().format('DD-MM-YYYY')
        }).returning({mockId:MockInterview.mockId});

        console.log("Inserted ID:",resp)
        if (resp.length > 0) 
            {
            setOpenDialog(false);
            router.push(`/dashboard/interview/${resp[0]?.mockId}`)
        }
    }
    else{
        console.log("ERROR");
    }

        setLoading(false)
    }
 
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all '
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className=' text-lg text-center'>+Add New</h2>
        </div>
                <Dialog open={openDialog}>
        
        <DialogContent className="max-w-2xl">
            <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>Tell us more about yout Job Interview</DialogTitle>
            <DialogDescription>
                <form onSubmit={onSubmit} >

               <div>
                
                <h2>Add Details about yout job position/role,job description and years of experience </h2>
                <div className='mt-7 my-3'>
                    <label>Job Role/Job Position</label>
                    <Input placeholder="Ex.Full Stack Developer"required
                    onChange={(event)=>setJobPosition(event.target.value)}
                    />
                </div>
                <div className=' my-3'>
                    <label>Job Description/Tech Stack</label>
                    <Textarea placeholder="Ex.React,Node.js,python,MySQL"required
                     onChange={(event)=>setJobDesc(event.target.value)}
                    />
                </div>
                <div className=' my-3'>
                    <label>Years of Experience</label>
                    <Input placeholder="Ex.5" type="number" max="20"required
                     onChange={(event)=>setJobExperience(event.target.value)}
                    />
                </div>
               </div>
                <div className='flex gap-5 justify-end'>
                    <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)} >Cancel</Button>
                    <Button type="submit" disable={Loading}>
                        {Loading?
                        <>
                        <LoaderCircle className='animate-spin'/>Starting Interview
                        </>:'Start Interview'
                     }
                        
                        
                        </Button>

                </div>
                </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
   
  )
}

export default AddNewInterview