
// Title, SubTitle, MainDescription, AppliedSkills, LiveAccess
export default function ProjectContent({content}: {content: [string, string, string[] | string, string[], string[]]}){
    return(
        <div className="bg-alt border-t border-zinc-950 border-l border-r py-9 md:mx-72 mx-6 rounded-lg text-center" id="PurpleBarContainer">
            <div className="bg-zinc-950 md:mx-10 mx-9 rounded-lg pb-6">
            <h1 className="text-4xl pt-4 text-center font-extrabold mb-4">{content[0]}</h1>
            <h3 className="mx-4 md:mx-0 font-semibold text-lg pb-4 mb-1">{content[1]}</h3>
            <div className="purple-bar border-black border-1 my-4 position-absolute"></div>
            </div>
            <div className="flex flex-col sm:flex-row mt-9 items-center md:items-start justify-center">
                <div className="md:w-1/2 w-5/6 p-4 md:text-start text-center flex flex-col justify-start bg-zinc-950 rounded-lg md:ml-10">
                    {typeof content[2] === 'string' ? <p className="mx-6 font-semibold text-md my-6 text-gray-400">{content[2]}</p> : content[2].map((paragraph, index) => ( 
                    <p className="mx-6 font-semibold text-md my-1 text-gray-400 pb-4" key={index}>{paragraph}</p> ))}
                </div>       
                <div className="md:w-1/2 w-5/6 p-4 mx-10 mt-4 md:mt-0 flex flex-col bg-zinc-950 rounded-lg">
                    <div className="bg-alt rounded-lg">
                        <h3 className="mt-4 font-bold text-xl">Applied Skills</h3>                
                        <div className="rounded-lg py-6 flex flex-wrap justify-center m-2">                           
                            {content[3].map((skill, index) => (
                                <span key={index} className="tag my-1 mx-1 font-bold border-black border-2">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-alt mt-4 rounded-lg">
                    <h3 className="mt-4 font-bold text-xl">Live Access</h3>                
                        <div className="rounded-lg py-6 flex flex-wrap justify-center m-2 ">
                            {content[4].map((info, index) => (                        
                                <p key={index} className="font-semibold text-md">{info}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

