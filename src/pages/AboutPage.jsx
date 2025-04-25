
import React from 'react';
import TeamMember from '../components/TeamMember';
import swathy from './swathy.jpg'
import aravind from './Aravind.jpg'
import nithiya from './nithiya.jpg'

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nithiya B',
      role: 'Project Lead & Frontend Developer',
      bio: 'Computer Science major with a passion for creating intuitive user interfaces and seamless experiences.',
      imageUrl: nithiya
    },
    {
      id: 2,
      name: 'Swathy S',
      role: 'AI & Machine Learning Engineer',
      bio: 'Specializes in natural language processing and conversational AI systems for educational technology.',
      imageUrl: swathy
    },
    {
      id: 3,
      name: 'Arun Nehru S',
      role: 'UX Designer & Researcher',
      bio: 'Studies the intersection of technology and education, focused on creating accessible learning tools.',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      id: 4,
      name: 'Aravind M',
      role: 'Backend Developer',
      bio: 'Passionate about building scalable systems that power intelligent applications in education.',
      imageUrl: aravind
    },
  ];

  return (
    <div className="page-transition min-h-screen pt-16 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Dream Weavers Team</h1>
          <p className="text-xl text-gray-600">
            We're a group of students passionate about using technology to enhance the college experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Dream Weavers, we believe in leveraging technology to make college life simpler and more accessible. 
              Our AI-powered chatbot assistant was born from our own experiences navigating the complexities of campus life.
            </p>
            <p className="text-gray-700">
              We designed this tool to provide instant answers to questions about classes, locations, events, and resources
              — allowing students to focus on what matters most: their education and personal growth.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
            
            {/* Timeline nodes */}
            <div className="grid grid-cols-1 gap-8 pb-8 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">Project Inception</h3>
                  <p className="text-gray-500 text-sm">November 2024</p>
                  <p className="text-gray-600 mt-2">Concept development and initial research</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">Development Phase</h3>
                  <p className="text-gray-500 text-sm">December - 2024 December - 2025</p>
                  <p className="text-gray-600 mt-2">Building the AI model and user interface</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">Beta Testing</h3>
                  <p className="text-gray-500 text-sm">January - February 2026</p>
                  <p className="text-gray-600 mt-2">Student feedback and system refinement</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-medium text-gray-900">Official Launch</h3>
                  <p className="text-gray-500 text-sm">March 2026</p>
                  <p className="text-gray-600 mt-2">Rollout to the entire student body</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
