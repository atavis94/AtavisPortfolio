'use client';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png';
import NavLinks from './navLinks';
import { useEffect, useState } from 'react';


export default function NavContainer() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.scrollY;
    
        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos)  || currentScrollPos < 10);
    
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
      };
    
      // new useEffect:
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    
      }, [prevScrollPos, visible, handleScroll]);
    
  return (
    <div className={`${visible? 'opacity-100' : 'opacity-0' }
    text-white pb-5 pt-2 px-10 fixed top-0 inset-x-0 justify-start shadow-md
     flex gap-2 space-x-5 bg-zinc-950 z-50`}>

        <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
        <Link href="https://www.linkedin.com/in/aidan-f-085422b4/">
            <Image src={linkedinIcon} alt="Github" className="hover:cursor-pointer" width={30} height={30} />
        </Link>
        </div>
        <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
        <Link href="https://github.com/atavis94">
            <Image src={githubIcon} alt="Github" width={30} height={30} className='hover:cursor-pointer' />
        </Link>
            </div>
        <div className="pt-4 md:px-10 p-4 fixed top-0 inset-x-0 right-0 justify-end flex md:gap-2 space-x-5">
            <NavLinks />
        </div>  
    </div>
  );
}
