import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useEffect } from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
const textToSpeach=(text)=>{
    if('speechSynthesis'in window){
      const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
    else{
      alert('Your browser does not support text-to-speech functionality.'); 
    }
  };
  useEffect(()=>{
    console.log({mockInterviewQuestion})
      },[]);
  
  return mockInterviewQuestion&&(
    <div className='P-5 border rounded-lg my-10 '>
      <div className='grid grid-col-2  md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
          <h2 key={index}className={`p-2 bg-secondary rounded-full my-3 ml-3 mr-3
          text-xs md:test-sm text-center cursor-pointer
          ${activeQuestionIndex==index&& 'bg-red-400 text-white'}`} >Question {index+1}
          </h2>
        ))}
      </div>
      <h2 className=' ml-3 my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
      <Volume2 className='cursor-pointer mb-6'  onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}/>

      <div className='border rounded-lg p-5 bg-blue-200 ml-3 mr-3 mb-4 mt-18'>
        <h2 className='flex gap-2 items-center  text-blue-700'>
          <Lightbulb/>
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-blue-600 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE} </h2>
      </div>
    </div>
  )
}

export default QuestionsSection;