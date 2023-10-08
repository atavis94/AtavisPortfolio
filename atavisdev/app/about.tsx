
export default function About(){
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
              <p className="mb-6">I&apos;m Aiden, an aspiring software engineer and recent graduate of UniSA. My passion is building web pages with elegant and user friendly user interfaces.
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
            <div className="flex flex-wrap max-w-lg">
              <span className="tag my-1 font-bold border-black border-2">React</span>
              <span className="tag my-1 font-bold border-black border-2">Next.JS</span>
              <span className="tag my-1 font-bold border-black border-2">.NET</span>
              <span className="tag my-1 font-bold border-black border-2">TypeScript</span>
              <span className="tag my-1 font-bold border-black border-2">JavaScript</span>
              <span className="tag my-1 font-bold border-black border-2">HTML</span>
              <span className="tag my-1 font-bold border-black border-2">CSS</span>
              <span className="tag my-1 font-bold border-black border-2">C#</span>
              <span className="tag my-1 font-bold border-black border-2">C++</span>
            </div>
            <div className="mt-14">
              <h2 className="text-2xl font-semibold sm:text-center mb-2">Developer Tools</h2>
            </div>
            <div className="flex flex-wrap max-w-lg">
              <span className="tag my-1 font-bold border-black border-2">VS Code</span>
              <span className="tag my-1 font-bold border-black border-2">Visual Studio</span>
              <span className="tag my-1 font-bold border-black border-2">XCode</span>
              <span className="tag my-1 font-bold border-black border-2">Eclipse</span>
              <span className="tag my-1 font-bold border-black border-2">Bash</span>
              <span className="tag my-1 font-bold border-black border-2">PowerShell</span>
              <span className="tag my-1 font-bold border-black border-2">XCode</span>

            </div>
          </div>
        </div>
        
      </div>
    )
}