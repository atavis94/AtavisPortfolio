import Image, { StaticImageData } from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card } from '@/components/ui/card';
  
import Link from 'next/link';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'; 
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import { useState } from 'react';

// Will be expanded to allow for different project types. E.g., a project with a video instead of images, live interactions built into the page, etc.
export default function ProjectManager({
        imageContent, 
        content 
    } : {
        imageContent: [staticImageData: StaticImageData, description: string][]; 
        content: {title: string, subtitle: string, description: string[] | string, skills: string[], liveinfo: string[], url?: string}
    }) {

        const formattedImageContent = imageContent.map(([image, description]) => ({
            original: image.src,
            thumbnail: image.src,
            description: description, 
        }));

        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState(imageContent[0][0]);
      
    return (
        <>
              <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Full-size Image Modal"
            className="Modal"
            overlayClassName="Overlay"
            >         
          <Image src={selectedImage} alt="Enlarged Version of Selected Image (Varies)"  onClick={() => setModalIsOpen(false)}/>
      </Modal>
        
        <div className="md:mt-20 mt-18 pb-20 lg:flex-row justify-center text-center">
            <div className="bg-background">
                <h1 className="text-4xl pt-4 font-extrabold mb-4">{content.title}</h1>
                <h3 className="mx-4 md:mx-0 font-semibold text-lg pb-4 mb-1">{content.subtitle}</h3>
            </div>
            <div className='bg-backgroundalt flex flex-col'>
                <div className='mx-16 md:mx-auto max-w-[65rem] my-auto'>
                    <Carousel opts={{ align: "center" }}>
                    <CarouselContent >
                        {imageContent.map((item, index) => (
                        <CarouselItem key={index} className="flex justify-center items-center">
                            <Image src={item[0]} alt={item[1]} height={550} width={1000} onClick={ () => {setSelectedImage(item[0]);
                            setModalIsOpen(true); }}/>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-center gap-4 mt-10 flex-grow mb-8 mx-auto px-2">

                <div className="flex flex-col  flex-grow max-w-md mt-10 mb-8 mx-auto md:mx-4 w-[90%] md:w-1/3">

                    <div className="px-6 py-2">
                        <h3 className="mt-4 font-bold text-xl">Applied Skills</h3>                
                        <div className="rounded-lg py-3 flex flex-wrap justify-center m-2">                           
                            {content.skills.map((skill, index) => (
                                <span key={index} className="p-2 text-white rounded-xl my-1 font-bold bg-accent border-purple-500 border-1 mx-1">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="my-2 py-3 align-bottom">
                        <h3 className="mt-4 font-bold text-xl">Live Access</h3>                
                        <div className="rounded-lg py-2 flex flex-wrap justify-center ">
                            {content.liveinfo.map((info, index) => (                        
                                <p key={index} className="font-semibold text-md mb-4 mx-3">{info}</p>
                            ))}
                            <Link href={"/#projects"}><button className="mx-2 shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faHouseChimney} /> Return Home</button></Link>

                            {content.url ? 
                                <Link href={content.url}><button className="mx-2 shadow bg-neutral-950 border-black border hover:bg-neutral-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faTowerBroadcast} className='text-red-500'/> View Live</button></Link>
                            :
                                <button disabled className="mx-2 shadow bg-neutral-200 border-black border hover:bg-neutral-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faTowerBroadcast} className='text-red-500'/> View Live</button>
                            }
                        </div>
                    </div>
                </div> 
                <div className="flex flex-col flex-grow max-w-3xl justify-center mb-6">              
                    <h2 className="text-lg font-extrabold py-3 text-center mb-1">CEIH Heart Failure Survey System</h2>
                    <div className="px-6">
                        {typeof content.description === 'string' ? <p className="font-semibold text-md my-6">{content.description}</p> : content.description.map((paragraph, index) => ( 
                        <p className="font-semibold text-md my-1 pb-4" key={index}>{paragraph}</p> ))}
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
};