import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from 'react-modal';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import 'react-awesome-slider/dist/captioned.css';
import 'react-awesome-slider/dist/styles.css';

const AutoSlider = withAutoplay(AwesomeSlider);

export default function Carousel({imageContent}: {imageContent: [StaticImageData, string][]}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imageContent[0][0])


    const openModal = (image: StaticImageData) => {
        setSelectedImage(image);
        setModalIsOpen(true);
      };

    

    return (
      <div className="flex justify-center items-center mt-16 mb-14">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Full-size Image Modal"
            className="Modal"
            overlayClassName="Overlay"
            >      
            <Image src={selectedImage} alt="Enlarged Version of Selected Image (Varies)" onClick={() => setModalIsOpen(false)}/>
        </Modal>

        <AutoSlider animation="openAnimation" play={true} interval={5000} style={{ height: '85vh'}}>
            {imageContent.map(([imageData, caption], index) =>(
                <div key={index} data-src={imageData.src} onClick={() => {openModal(imageData)}}>
                    <p>{caption}</p>   
                </div>
            ))}
        </AutoSlider>
      </div>


       





    )}        
    

    