'use client';
import { StaticImageData } from "next/image";
import Carousel from '../carousel';
import ProjectContent from "../projectContent";
import home from '/resources/ceih/Home.png';
import surveyHome from '/resources/ceih/SurveyHome.png';
import surveyBuilder from '/resources/ceih/SurveyBuilder.png';
import addQuestion from '/resources/ceih/AddQuestion.png';
import notifications from '/resources/ceih/Notifications.png';


export default function Ceih() {

    const imageProps: [StaticImageData, string][] = [
        [home, "Reconstructed site with an updated design incorporating the notification system."],
        [surveyHome, "Main survey facility page displaying all active surveys and permissions."],
        [surveyBuilder, "Survey construction tool displays a sticky toolbox on the left and displays the survey to the right."], 
        [addQuestion, "Supports adding questions of various types in addition to headings and subsections."],
        [notifications, "Notification system alerts users to new surveys and allows them to be dismissed."]];
    
    const contentData: [string, string, string[], string[], string[]] = [
        "UniSA ICT Capstone Project",
        "Commission on Excellence and Innovation in Health - Survey Builder",
        [`The Commission on Exellence and Innovation in Health's Heart Failure Subcommitte initiated a student project to build a web portal
        that would serve as their public interface and also allow CEIH staff to interact with patients and other stakeholders.`,
        `The initiative had been underway for over a year, with the previous team incorporating Umbraco's content management system and relying on the .NET Framework.`,
        `My primary involvement revolved around building and implementing a survey system into the website, permitting CEIH staff to construct tailored surveys to gather insights 
            from crucial stakeholders, including clinicians and patients.`,
        `The existing site required a complete rebuild as the codebase was undocumented, messy, and difficult to work with. I saw this as a necessity to 
        ensure the future success of the project given that it is an ongoing student project. 
         Remaining faithful to the original design, the site was rebuilt using technology and frameworks familiar to UniSA's software engineering students to ensure that future students would have no trouble working with the codebase.`,
        `The end product was a success and the client was very pleased with the result.`],
        [".Net Framework", "C#", "JavaScript", "Umbraco CMS", "SQLite", "Bootstrap V5", "CSS", "HTML"],
        [`Unfortunately, the project is an ongoing work in progress and is not available for live interaction.`]
    ]

return ( 
    <div className="md:mt-18 pb-20 lg:flex-row justify-center shadow-lg">
        <Carousel imageContent={imageProps} />        
        <ProjectContent content={contentData} />      
    </div>
)};