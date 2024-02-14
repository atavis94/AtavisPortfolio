'use client';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png';
import { useEffect, useState, useRef, useCallback } from 'react';
import { ModeToggle } from './ModeToggle';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';



export default function NavContainer() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const mobileMenuRef = useRef<HTMLDivElement | null>(null); 


    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen); 
    };

  
    const handleScroll = useCallback(() => {
      const currentScrollPos = window.scrollY;
    
      // Check if the screen width is less than 768px
      if (window.innerWidth < 768) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        // If the screen width is larger than or equal to 768px, always show the navbar
        setVisible(true);
      }
    
      setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos, visible]);
    
    // Handle displaying the navbar on scroll.
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    

    // CLose the mobile menu when the user clicks outside of it.
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node)
        ) {
          toggleMobileMenu();
        }
      };
  
      if (isMobileMenuOpen) {
        document.addEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isMobileMenuOpen, toggleMobileMenu]);
   
  return (
  <>
    <nav className={`${visible || isMobileMenuOpen ? 'opacity-100' : 'opacity-0' }
       pb-5 pt-2 px-8 fixed top-0 inset-x-0 justify-start shadow-md
        flex gap-2 bg-nav z-50`}>
        <div className="pt-1.5 mr-4" style={{ position: 'relative', zIndex: 10 }}>
          <ModeToggle />
        </div>
        {/* <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
          <Link href="https://www.linkedin.com/in/aidan-f">
              <LinkedInLogoIcon className='h-[2rem] w-[2rem] hover:scale-110 transition-transform duration-250 ease-in-out'/>
          </Link>
        </div>
        <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
          <Link href="https://github.com/atavis94">
              <GitHubLogoIcon className='h-[2rem] w-[2rem] hover:scale-110 transition-transform duration-250 ease-in-out'/>
          </Link>
        </div> */}
        <h2 className='pt-2.5'>Toggle Darkmode</h2>
        <div className="md:hidden fixed inset-x-0 right-5 justify-end flex items-center">
          <button className="navbar-burger flex items-center text-zinc-300 p-3" onClick={toggleMobileMenu}>
            <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden visible pt-3 md:px-10 p-4 fixed inset-x-0 right-0 justify-end md:flex md:gap-5">
          <Link className="underscore text-lg font-bold" href="/#about">ABOUT</Link>        
          <Link className="underscore text-lg font-bold" href="/#projects">PROJECTS</Link>
          <Link className="underscore text-lg font-bold" href="/#contact">CONTACT</Link>
        </div>  
    </nav>

    <nav className={`fixed left-0 h-full w-80 bg-zinc-950 text-white p-4 transform top-[65px] ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 `} ref={mobileMenuRef}>
      <ul className="space-y-4">
        <li>
          <Link
            href="/#about"
            className="block text-2xl underscore hover:text-purple-500" onClick={toggleMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/#projects"
            className="block text-2xl underscore hover:text-purple-500" onClick={toggleMobileMenu}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="/#contact"
            className="block text-2xl underscore hover:text-purple-500" onClick={toggleMobileMenu}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </>
  );
}
