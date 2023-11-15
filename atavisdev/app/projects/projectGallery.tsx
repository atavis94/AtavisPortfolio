import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from 'react-modal';


import ImageGallery from "react-image-gallery";

import "node_modules/react-image-gallery/styles/css/image-gallery.css";

export default function ProjectGallery({imageContent}: {imageContent: [staticImageData: StaticImageData, description: string][]}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imageContent[0][0].src)
    
    const formattedImageContent = imageContent.map(([image, description]) => ({
        original: image.src,
        thumbnail: image.src,
        description: description,
    }));


    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };


    return (
      <div className="flex justify-center items-center mt-16 ">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Full-size Image Modal"
            className="Modal"
            overlayClassName="Overlay"
            >      
            <Image src={selectedImage} alt="Enlarged Version of Selected Image (Varies)" onClick={() => setModalIsOpen(false)}/>
        </Modal>

        <ImageGallery items={formattedImageContent} slideDuration={1000} showPlayButton={false} autoPlay={true} showNav={true} showBullets={false} showThumbnails={true} showFullscreenButton={true} />   
      </div>


       





)}        
    

    