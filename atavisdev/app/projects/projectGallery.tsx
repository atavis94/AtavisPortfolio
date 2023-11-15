import { StaticImageData } from "next/image";
import ImageGallery from "react-image-gallery";
import "node_modules/react-image-gallery/styles/css/image-gallery.css";

export default function ProjectGallery({imageContent}: {imageContent: [staticImageData: StaticImageData, description: string][]}) {
   
    const formattedImageContent = imageContent.map(([image, description]) => ({
        original: image.src,
        thumbnail: image.src,
        description: description,
    }));


    return (
      <div className="flex justify-center items-center mt-16 rounded-lg">
        <ImageGallery items={formattedImageContent} slideDuration={1000} showPlayButton={false} autoPlay={false} showNav={true} showBullets={false} showThumbnails={true} showFullscreenButton={true} />   
      </div>

)}        
    

    