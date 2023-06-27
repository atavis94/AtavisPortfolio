'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Atavis Development',
  description: 'Atavis is a software developer based in Adelaide, South Australia.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="TopBar inline-flex mb-20 bg-transparent">
          <div className="inline-flex bg-transparent">
            <div className="p-2 px-10 fixed top-0 inset-x-0 justify-start flex gap-2 space-x-5 bg-transparent">
              <div className='pt-2' style={{ position: 'relative', zIndex: 10 }}>
                <Image src={linkedinIcon} alt="Github" className='hover:cursor-pointer' width={30} height={30}  onClick={() => router.push("https://www.linkedin.com/in/aidan-forbes-085422b4/")}/>            
              </div>
              <div className='pt-2' style={{ position: 'relative', zIndex: 10 }} >
                <Image src={githubIcon} alt="Github" width={30} height={30} className='hover:cursor-pointer' onClick={() => router.push("https://github.com/atavis94")}/>
              </div>  
              <div className="pt-4 px-10 fixed top-0 inset-x-0 right-0 justify-end flex gap-2 space-x-5">
              {
                pathname === '/contact'
                  ? <Link href="/">Home</Link>
                  : <Link href="/contact">Contact</Link>
              }
            </div>           
            </div>



          </div>
        </div>
        {children}
      </body>
    </html>
  );
  
};