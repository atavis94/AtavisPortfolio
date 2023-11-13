
// Title, SubTitle, MainDescription, Notes
export default function ProjectContent({content}: {content: [string, string, string[] | string, string[]]}){
    return(
        <div className="bg-alt border-t border-zinc-950 border-l border-r py-9 md:mx-72 mx-6 rounded-lg text-center" id="PurpleBarContainer">
            <div className="bg-zinc-950 mx-10 rounded-lg">

            <h1 className="text-4xl pt-4 text-center font-extrabold mb-4">{content[0]}</h1>
            <h3 className="font-semibold text-lg pb-4 mb-1">{content[1]}</h3>
            <div className="purple-bar border-black border-1 my-4 position-absolute"></div>
            {typeof content[2] === 'string' ? <p className="mx-6 font-semibold text-md my-6 text-gray-400">{content[2]}</p> : content[2].map((paragraph, index) => ( 
                <p className="mx-6 font-semibold text-md my-3 text-gray-400 pb-4" key={index}>{paragraph}</p> ))}
            </div>
            <div className="bg-zinc-950 rounded-lg py-6 flex flex-wrap justify-center mx-10">
                {content[3].map((skill, index) => (
                    <span key={index} className="tag my-1 mx-1 font-bold border-black border-2">{skill}</span>
                ))}

            </div>
           


        </div>
    )
}

