import unisaLogo from "../resources/unisa_stem_logo.png";
import flindersLogo from "../resources/flinders2.png";
import Image  from "next/image";
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Qualifications(){
    return(

        <div className="bg-background md:py-24 py-20 lg:flex-row justify-center shadow-lg" id="PurpleBarContainer">
            <div className="flex justify-center items-center mt-16">
                <a href="/AidanResume.pdf" download>
                    <button className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        <span className="flex items-center gap-2">         
                        <FontAwesomeIcon icon={faDownload} className='h-6'/>
                        Download Resume
                        </span> 
                    </button>
                </a>         
            </div>
      
            <div className="flex flex-col sm:flex-row mt-32 items-center md:items-start justify-center">
                <div className="md:w-1/4 w-3/4 p-4 md:text-start text-center flex flex-col justify-start">
                <div>
                <Image src={unisaLogo} style={{ objectFit: "contain" }} width={375} alt="UniSA STEM Logo" className="mb-20 lg:order-0 lg:mx-10 sm:mx-20" />

                </div>
                </div>         
                <div className="md:w-1/4 w-3/4 p-4 mx-10 flex flex-col">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold sm:text-center mb-4">Bachelor of Information Technology (Software Development)</h2>
                </div>
                <div className="flex flex-wrap max-w-lg">
                    <h2>Achievements:</h2>
                    <ul className="list-disc list-inside mt-4">
                    <li>Chancellor&apos;s Letter of Commendation 2020 (Top 5%)</li>
                    <li>Merit Award for Outstanding Performance 2021</li>
                    <li>Merit Award for Outstanding Performance 2022</li>
                    <li>Golden Key International Honour Society Membership</li>
                    </ul>
                </div>
                </div>
            </div>


      </div>
    )
}