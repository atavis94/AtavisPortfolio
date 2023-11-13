'use client';
import Image, { StaticImageData } from "next/image";
import surveyBuilder from '/resources/ceih/SurveyBuilder.png';
import Modal from 'react-modal';
import { useState } from 'react';


export default function Showcase(){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(surveyBuilder);

  return(
      <div className="bg-zinc-950 text-white py-28 text-center" id="PurpleBarContainer">   
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Full-size Image Modal"
            className="Modal"
            overlayClassName="Overlay"
            >         
          <Image src={selectedImage} alt="Enlarged Version of Selected Image (Varies)" onClick={() => setModalIsOpen(false)}/>
      </Modal>
  
      <h1 className="text-4xl font-extrabold mb-4">SHOWCASE</h1>
      <div className="purple-bar border-black border-1 mt-4 position-absolute"></div>
      <div className="flex flex-col sm:flex-row mt-20 items-center md:items-start justify-center">
        <div className="md:w-1/4 w-3/4 p-4 md:text-start text-center flex flex-col justify-start">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold md:text-start">CEIH Heart Failure Survey System</h2>
          </div>
          <div>
            <p className="mb-6">
              Initiated by the Commission on Exellence and Innovation in  Health&apos;s Heart Failure Subcommitte, this project served as my capstone project as part of my software development degree.                         
            </p>
            <p className='mb-6'>
              The project required constructing a survey system akin to survey monkey which would allow CEIH committe members to build custom surveys to gain specific data from
              key stakeholders, including clinicians and patients. Additionally, the existing website was rebuilt to improve user friendliness and to allow for the survey system to be integrated.          
            </p>

          </div>
        </div>
        <div className="md:w-1/4 w-3/4 p-4 mx-10 flex flex-col">
        <Image src={surveyBuilder} alt="UniSA STEM Logo" className="mb-20 lg:order-0 lg:mx-10 sm:mx-20" onClick={() => { 
          setSelectedImage(surveyBuilder);
          setModalIsOpen(true)}}/>
        </div>
      </div>
      <a href="/projects/ceih" className="bg-purple-800 border-black border-2 hover:bg-purple-500 rounded-xl py-1 px-4">View Details</a>
      
    </div>
  )
}