'use client';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png'
import ToggleNav from './toggleNav';
import { useEffect, useState } from 'react';

export default function NavContainer() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      {show ? (
        <div className="TopBar inline-flex mb-20 bg-transparent text-white">
          <div className="inline-flex bg-transparent">
            <div className="p-2 px-10 fixed top-0 inset-x-0 justify-start flex gap-2 space-x-5 bg-transparent">
              <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
                <Link href="https://www.linkedin.com/in/aidan-f-085422b4/">
                  <Image src={linkedinIcon} alt="Github" className='hover:cursor-pointer' width={30} height={30} />
                </Link>
              </div>
              <div className="pt-2" style={{ position: 'relative', zIndex: 10 }}>
                <Link href="https://github.com/atavis94">
                  <Image src={githubIcon} alt="Github" width={30} height={30} className='hover:cursor-pointer' />
                </Link>
              </div>
              <div className="pt-4 px-10 fixed top-0 inset-x-0 right-0 justify-end flex gap-2 space-x-5">
                <ToggleNav />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
