import Image from "next/image";
import Atavis from "/resources/atavis.png";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Banner(){
    return(
        <div className="py-28" id="PurpleBarContainer">        
        <h1 className="text-center subpixel-antialiased text-4xl lg:text-5xl font-extrabold mx-2 mt-18 md:mt-44">
            AIDAN FORBES. SOFTWARE DEVELOPER.
          </h1>
          <div className=" mt-6 z-50 text-center">
          <p className="subpixel-antialiased text-lg font-bold mx-5 mb-8 ml-18 max-w-[50rem] md:mx-auto md:text-center">
              I&apos;m a full-stack web developer based in South Australia. I&apos;m always interested in freelance work and employment opportunities! <br /> <br />Don&apos;t hesitate to drop me a line on LinkedIn or via the contact form.
          </p>

            <div className="flex justify-center items-center md:items-start mt-4 mb-10">
              <hr className="w-[90vw] md:max-w-[65rem] text-start border-purple-900" />
            </div>
            <div className="flex gap-4  justify-center mb-36">
                <Link href="#contact" className="shadow bg-purple-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-2">
                  Send me a message
                </Link>
                <div className="pt-1">
                  <Link href="https://www.linkedin.com/in/aidan-f">
                      <LinkedInLogoIcon className='h-[2.2rem] w-[2.2rem] hover:scale-110 transition-transform duration-250 ease-in-out'/>
                  </Link>
                </div>
                <div className="pt-1">
                  <Link href="https://github.com/atavis94">
                      <GitHubLogoIcon className='h-[2.2rem] w-[2.2rem] hover:scale-110 transition-transform duration-250 ease-in-out'/>
                  </Link>
                </div>
            </div>
          </div>
        </div>
    )
}