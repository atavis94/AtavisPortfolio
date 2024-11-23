'use client';
import Image, { StaticImageData } from "next/image";
import surveyBuilder from '/resources/ceih/SurveyBuilder.png';
import Modal from 'react-modal';
import Link  from 'next/link';
import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";


export default function Projects(){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(surveyBuilder);

  return(
      <div className="bg-background py-28 text-center">   
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Full-size Image Modal"
            className="Modal"
            overlayClassName="Overlay"
            >         
          <Image src={selectedImage} alt="Enlarged Version of Selected Image (Varies)" onClick={() => setModalIsOpen(false)}/>
      </Modal>
  
      <h1 className="text-4xl font-extrabold mb-12">My projects! See anything you like?</h1>

      <div className="flex flex-col md:flex-row justify-center mx-auto">
        <div className="md:max-w-lg mt-10 bg-backgroundalt border rounded-lg shadow-md flex-grow mb-8 mx-auto md:mx-4 w-[90%] md:w-1/2 ">
            <div className="max-h-xl flex justify-center mb-6 ">
                <Image src={selectedImage}  className="object-cover rounded-md" alt="Enlarged Version of Selected Image (Varies)" onClick={() => { 
                  setSelectedImage(surveyBuilder);
                  setModalIsOpen(true)}}/>
              </div>
            <h2 className="text-lg font-extrabold py-3 text-center mb-1">CEIH Heart Failure Survey System</h2>
            <div className="px-6">
            <p className="mb-5">
                Initiated by the Commission on Exellence and Innovation in  Health&apos;s Heart Failure Subcommitte, this project served as my capstone project of my software development degree.                         
              </p>
              <p className='mb-2'>
                The project required constructing a survey system akin to survey monkey which would allow committe members to build custom surveys to gain specific data from
                key stakeholders, including clinicians and patients. Additionally, the existing website was rebuilt to improve user friendliness and to allow for the survey system to be integrated.          
              </p>
              
            </div>
            <div className="my-2 py-4 flex justify-center w-full">
                <Link href="/projects/ceih" className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">View Details</Link>
            </div>
        </div>

          <div className="max-w-lg mt-10 bg-backgroundalt border rounded-lg shadow-md flex-grow mb-8 mx-auto md:mx-4 w-[90%] md:w-1/2">
            <div className="w-full max-h-xl flex justify-center mb-6 py-2">
                <Skeleton className="h-[300px] w-[95%] mb-6 my-2 mx-4" />
            </div>
            <h2 className="text-lg font-extrabold py-3 text-center mb-1">Coming Soon...</h2>
            <div className="px-6">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-[90%] mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-[85%] mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />  
              <Skeleton className="h-4 w-[90%] mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-[85%] mb-2" />
            </div>
            <div className="my-2 py-3 align-bottom">
            <Button disabled className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Coming Soon</Button>
            </div>
          </div>    
      </div>
    </div>
  )
}
