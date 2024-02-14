'use client';

import unisaLogo from "../resources/unisa_stem_logo.png";
import Image  from "next/image";
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function About(){
    const skills = [ "React", "Next.js", "Node.js", ".NET", "TypeScript", "JavaScript", "HTML", "CSS", "C#", "C++", "SQL", "NoSQL"];

    return(

        <div className="bg-backgroundalt py-20 text-center" id="PurpleBarContainer">       
          <h1 className="text-4xl font-extrabold mb-4">ABOUT ME</h1>          
          <div className="flex flex-col sm:flex-row mt-20 items-center md:items-start justify-center">
            <div className="md:w-1/4 w-3/4 p-4 md:text-start text-center flex flex-col justify-start">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold md:text-start">A little introduction...</h2>
              </div>
              <div>
                <p className="mb-6">I&apos;m a software engineer and graduate of UniSA. My passion is building web pages with elegant and user friendly user interfaces.
                  I also enjoy the challenge of solving back-end problems that support a rich and engaging front-end.                            
                </p>
                <p className="mb-6">
                  I&apos;m a hard working team-player by nature. I thrive on guiding others to work together and achieve a common goal.
                </p>
                <p className="mb-6">
                  In my spare time I like to watch Youtube videos about programming and web development, which helps me stay up to date with the latest trends and technologies.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/4 w-3/4 p-4 mx-10 flex flex-col">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold sm:text-center ">Key Skills</h2>
              </div>
              <div className="flex flex-wrap max-w-lg justify-center gap-2">
                {skills.map((skill) =>
                (
                  <span key={skill} className="p-2 text-white rounded-xl my-1 font-bold bg-accent border-purple-500 border-1">{skill}</span>
                )
                )}
              </div>
              <div className="mt-14">
                <h2 className="text-2xl font-semibold sm:text-center mb-2">Resume</h2>
              </div>
              <div className="flex flex-wrap max-w-lg justify-center gap-2">
                <a href="/AidanResume.pdf" download>
                  <button className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      <span className="flex items-center gap-2">         
                      <FontAwesomeIcon icon={faDownload} className='h-6'/>
                      Download
                      </span> 
                  </button>
                </a>  
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="md:max-w-md max-w-lg mx-auto mt-10 bg-background border rounded-lg shadow-lg p-8 hover:scale-105 transition-transform duration-250 ease-in-out">
              <div className="w-full flex justify-center mb-6 py-2">
                <Image src={unisaLogo} style={{ objectFit: "contain" }} width={200} height={200} alt="UniSA STEM Logo" />
              </div>
              <div className="w-full">
                <h2 className="text-xl font-extrabold py-3 text-center mb-4">Bachelor of Information Technology (Software Development)</h2>
                <div className="flex flex-col justify-center items-center gap-1 py-2">
                  <h3 className="text-sm">Chancellor&apos;s Letter of Commendation 2020 (Top 5%)</h3>
                  <h3 className="text-sm">Merit Award for Outstanding Performance 2021</h3>
                  <h3 className="text-sm">Merit Award for Outstanding Performance 2022</h3>
                  <h3 className="text-sm">Golden Key International Honour Society Member</h3> 
                </div>
              </div>
            </div>


          </div>
        </div>
    )
}