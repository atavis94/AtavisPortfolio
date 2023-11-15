import { StaticImageData } from 'next/image';
import ProjectGallery from './projectGallery';
import ProjectContent from './projectContent';

// Will be expanded to allow for different project types. E.g., a project with a video instead of images, live interactions built into the page, etc.
export default function ProjectManager({
        imageContent, 
        content 
    } : {
        imageContent: [staticImageData: StaticImageData, description: string][]; 
        content: {title: string, subtitle: string, description: string[] | string, skills: string[], liveinfo: string[], url?: string}
    }) {

    return (
        <div className="md:mt-20 mt-18 pb-20 lg:flex-row justify-center">
            <ProjectGallery imageContent={imageContent} />        
            <ProjectContent content={content} />      
        </div>
    )
};