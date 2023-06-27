import './globals.css'
import { Inter } from 'next/font/google'

import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../resources/github.png';
import linkedinIcon from '../resources/linkedin128x2.png'

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
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="TopBar inline-flex mb-20 bg-transparent">
        <div className="inline-flex bg-transparent">
        <div className="p-2 px-10 fixed top-0 inset-x-0 justify-start flex gap-2 space-x-5 bg-transparent">
          <div>          
            <a href="https://twitter.com/your_twitter" className="p-2">
              <Image src={linkedinIcon} alt="Twitter" width={25} height={25} />
            </a>
          </div>
          <div>
            <a href="https://github.com/your_github" className="p-2">
              <Image src={githubIcon} alt="Github" width={25} height={25}  />
            </a>
          </div>
        </div>
        <div className='pt-7 px-10 fixed top-0 inset-x-0 justify-end flex gap-2 space-x-5'>
          <Link href="/contact">Contact</Link>
        </div>

        </div>

      </div>

        {children}
     
      </body>
    </html>
  )
}