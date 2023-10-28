'use client';

export default function About(){
    const skills = [ "React", "Next.js", "Node.js", ".NET", "TypeScript", "JavaScript", "HTML", "CSS", "C#", "C++", "SQL", "MongoDB"];
    const tools = ["VS Code", "Visual Studio", "Git", "XCode", "Eclipse", "Jira"];

    return(

        <div className="bg-zinc-950 text-white py-20 text-center" id="PurpleBarContainer">       
        <h1 className="text-4xl font-extrabold mb-4">ABOUT ME</h1>
        <div className="purple-bar border-black border-1 mt-4 position-absolute"></div>
        
        <div className="flex flex-col sm:flex-row mt-20 items-center md:items-start justify-center">
          <div className="md:w-1/4 w-3/4 p-4 md:text-start text-center flex flex-col justify-start">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold md:text-start">A little introduction...</h2>
            </div>
            <div>


        
            

              <p className="mb-6">I&apos;m an aspiring software engineer and recent graduate of UniSA. My passion is building web pages with elegant and user friendly user interfaces.
                I also enjoy the challenge of solving back-end problems that support a rich and engaging front-end.                            
              </p>
              <p className="mb-6">
                I&apos;ve always been somewhat of a diplomat, which makes me a solid team player. I thrive on guiding others to work together and achieve a common goal.
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
            <div className="flex flex-wrap max-w-lg justify-center">
              {skills.map((skill) =>
              (
                <span key={skill} className="tag my-1 font-bold border-black border-2">{skill}</span>
              )
              )}
            </div>
            <div className="mt-14">
              <h2 className="text-2xl font-semibold sm:text-center mb-2">Developer Tools</h2>
            </div>
            <div className="flex flex-wrap max-w-lg justify-center">
              {tools.map((tool) => 
              (
                <span key={tool} className="tag my-1 font-bold border-black border-2">{tool}</span>
              )  
              )}
            </div>
          </div>
        </div>
      </div>
    )
}