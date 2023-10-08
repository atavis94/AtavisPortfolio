import unisaLogo from "../resources/unisa_stem_logo.png";
import flindersLogo from "../resources/flinders2.png";
import Image  from "next/image";

export default function Qualifications(){
    return(

        <div className=" bg-zinc-950 bg-alt lg:py-28 lg:flex-row justify-center shadow-lg" id="PurpleBarContainer">
            <h1 className="text-center subpixel-antialiased text-white text-4xl font-extrabold sm:mx-5 lg:mt-0 mt-20 mb-5">Qualifications</h1>
            <div className="purple-bar border-black border-1 mt-4 position-absolute"></div>
          
      
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

            <div className="flex justify-center items-center my-16">
            <hr className="w-3/4 md:w-2/3  text-center border border-zinc-700" />
            </div>


            <div className="flex flex-col sm:flex-row mt-24 items-center md:items-start justify-center mb-28 md:mb-2">
                <div className="md:w-1/4 w-3/4 p-4 md:text-start text-center flex flex-col justify-start">
                    <div>
                    <Image src={flindersLogo} style={{ objectFit: "contain" }} width={300} alt="UniSA STEM Logo" className="mb-20 lg:order-0 lg:mx-10 sm:mx-20" />

                    </div>
                </div>         
                <div className="md:w-1/4 w-3/4 p-4 mx-10 flex flex-col">
                    <div className="mb-4">
                    <h2 className="text-2xl font-semibold sm:text-center mb-4">Associate of Arts</h2>
                    </div>
                    <div className="flex flex-wrap max-w-lg">
                    <h2>Areas of Study:</h2>
                    <ul className="list-disc list-inside mt-4">
                        <li>Business & Management</li>
                        <li>Psychology</li>
                        <li>Assorted interest courses in political science and bioscience.</li>
                    </ul>
                    </div>
                </div>
            </div>
      </div>
    )
}