'use client';
import unisaLogo from "../resources/unisa_stem_logo.png";
import Image  from "next/image";


export default function About(){
    const skills = [ "React", "Next.js", "Node.js", ".NET", "TypeScript", "JavaScript", "HTML", "CSS", "C#", "C++", "SQL", "NoSQL"];

    return(

      <div className="bg-backgroundalt py-20 text-center">       
        <h1 className="text-4xl font-extrabold mb-12">A little introduction...</h1> 
            <div className="mx-auto max-w-lg md:max-w-3xl text-start">
              <p className="mb-6">Hey! I&apos;m Aidan and I&apos;m a software engineer. My journey into programming all started with a single class that ignited a spark
              of sorts. Ever since then I&apos;ve been hooked on problem-solving and the creative process behind building digital experiences.                          
              </p>
              <p className="mb-6">
                I have a fascination with UI/UX that goes way back to my days of building custom World of Warcraft UIs. That passion has stayed with me and drives my approach
                to not just programming, but life in general - I&apos;m always looking for ways to make things more usable, engaging, and enjoyable. 
              </p>
              <p className="mb-6">
                As a full-stack developer I&apos;ve dabbled in a variety of languages, from C# to JavaScript, and even delved into the world of PHP. I love the challenge
                of learning new technologies and applying them to build exceptional solutions.
              </p>
              <p className="mb-6">
                But it&apos;s not just about the code. I&apos;m a hard working team-player by nature. I love nothing more than checking an item off my TODO list. 
                I thrive on guiding others to work together and achieve a common goal. 
              </p>
              <p className="mb-6">
                In my downtime, you&apos;ll often find me glued to the screen, consuming content from popular programming content creators like ThePrimeagen and Theo.
                It&apos;s not just about staying up to date with the latest technologies - it&apos;s about immersing myself within a community of passionate developers and expanding
                my knowledge. 
              </p>
              <p className="mb-6">
                So that&apos;s a bit about me - a curious, creative, and dedicated software engineer with a love for problem-solving, user-centric design, and continuous learning.
                Let&apos;s build something amazing together!
              </p>

              <div className="flex flex-col items-center my-8  p-8">
                  <h2 className="text-2xl font-semibold sm:text-center mb-3">Key Skills</h2>
                  <div className="flex flex-wrap max-w-lg justify-center gap-2 ">
                    {skills.map((skill) => (
                      <span key={skill} className="p-2 text-white rounded-xl my-1 font-bold bg-accent border-purple-500 border-1">
                        {skill}
                      </span>
                    ))}
                  
                  </div>
                                     
              </div>
              <div className="mx-auto mt-10 bg-backgroundalt border rounded-lg shadow-md p-8 ">
                  <div className="w-full flex justify-center mb-6 py-2">
                    <Image src={unisaLogo} style={{ objectFit: "contain" }} width={200} height={200} alt="UniSA STEM Logo" />
                  </div>
                  <div className="w-full">
                    <h2 className="text-lg font-extrabold py-3 text-center mb-4">Bachelor of Information Technology (Software Development)</h2>
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