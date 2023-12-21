import Image from "next/image";
import Atavis from "/resources/atavis.png";

export default function Banner(){
    return(
        <div className="shadow-md" style={{ minHeight: '90vh' }} id="PurpleBarContainer">        
          <h1 className="text-center subpixel-antialiased text-white text-5xl font-extrabold mx-5 mt-20 md:mt-52">
            Atavis Web Development
          </h1>
          <p className="text-center subpixel-antialiased text-white text-lg font-bold mt-5 mx-5 my-10">
          Custom websites done your way
          </p>

          <div className="purple-bar border-black border-1 mt-4 position-absolute"></div>
 
        </div>
    )
}