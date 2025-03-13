import React from 'react';
import 'animate.css';

function App() {
  return (
    <div
      className="bg-gradient-to-b from-blue-600 to-indigo-800 min-h-screen text-white"
      style={{
        backgroundImage: 'url("/home.webp")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
     
      <section className="relative flex flex-col justify-center items-center text-center py-20 sm:py-32 z-10">
       
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s z-20 ">
          AI-Powered Mock Interviews
        </h1>
        <p className="text-lg sm:text-xl opacity-90 mb-8 animate__animated animate__fadeIn animate__delay-2s z-20 ">
          Prepare for your dream job with personalized mock interviews tailored to your skills.s
        </p>
        <div className="flex gap-6 justify-center animate__animated animate__fadeIn animate__delay-3s z-20">
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-teal-400 to-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="/dashboard"
            className="inline-block border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Interview
          </a>
        </div>
      </section>

      
      <section id="about" className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          How It Works
        </h2>
        <p className="text-lg sm:text-xl opacity-80 max-w-3xl mx-auto mb-10 animate__animated animate__fadeIn animate__delay-2s">
          AI-Mock Interview is an intelligent platform designed to help you practice for real-world job interviews.
          Get personalized feedback and improve your performance by simulating realistic interview scenarios powered by AI.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Smart Interview Matching</h3>
            <p>Our AI matches you with the right interview questions based on your skillset and experience.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Real-Time Feedback</h3>
            <p>Receive instant, actionable feedback on your performance after every mock interview.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Track Your Progress</h3>
            <p>Monitor your improvement over time and build the confidence to ace your real interview.</p>
          </div>
        </div>
      </section>

     
      <section id="start" className="py-16 px-6 bg-gray-700 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Get Started Today
        </h2>
        <p className="text-lg sm:text-xl opacity-80 max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Ready to level up your interview skills? Take your first mock interview now and start receiving feedback right away.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-gradient-to-r from-teal-400 to-blue-600 text-white py-4 px-10 rounded-lg text-lg font-semibold hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
        >
          Start Your Interview
        </a>
      </section>

    
      <footer className="bg-gray-900 py-8 text-center text-white">
        <p className="text-sm opacity-70 mb-4">© 2024 AI-Mock Interview | All Rights Reserved</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-white hover:text-blue-400 transition duration-300">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
