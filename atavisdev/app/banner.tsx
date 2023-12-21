import Image from "next/image";
import Atavis from "/resources/atavis.png";

export default function Banner(){
    return(
        <div className="shadow-md" style={{ minHeight: '90vh' }} id="PurpleBarContainer">        
          <h1 className="text-center subpixel-antialiased text-white text-5xl font-extrabold mx-5 mt-20 md:mt-52">
            HI, I&apos;M AIDEN, AN ASPIRING SOFTWARE ENGINEER.
          </h1>
          <p className="text-center subpixel-antialiased text-white text-lg font-bold mt-5 mx-5 my-10">
            Software development graduate from the University of South Australia, passionate about all things programming.
          </p>

          <div className="purple-bar border-black border-1 mt-4 position-absolute"></div>
          <div className="flex items-center justify-center mt-10 z-50" >
            <Image src={Atavis} alt="Atavis" width={200} height={200} className="rounded-full h-40 w-40 border-black border-2 shadow-lg bg-cover mb-10" id="PurpleBarContainer"/> 
          </div>  
        </div>
    )
}