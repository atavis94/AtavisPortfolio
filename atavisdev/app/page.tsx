'use client';
import Image  from "next/image";
import unisaLogo from "../resources/unisa_stem_logo.png";
import flindersLogo from "../resources/flinders2.png";
import Link from 'next/link';
import Atavis from '../resources/atavis.png';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className="bg-zinc-900 justify-center mt-10 flex flex-col  ">
      <div className="bg-zinc-950">
      <div className="flex items-center justify-center ">

          <Image src={Atavis} alt="Atavis" width={200} height={200} className="rounded-full h-36 w-36 border-black shadow-lg bg-cover" />
      </div>

      <p className="text-center text-white mt-5 text-xl mb-20">
        I love to build things on the intertubes.
        <br />
        My passion is anything React, NextJs, and TailwindCSS. I'm also great with anything .NET related.
        <br />
        As a solid team player, I make a great member of any team and I focus on the big picture of getting the job done.
      </p>

      </div>

      <div className="flex mt-32 justify-center gap-md-28 mb-27 w-full">
        <Image src={unisaLogo} 	style={{objectFit: "contain"}} width={400} alt="UniSA STEM Logo" className="mx-10"/>
        <div className="mx-10"> 
          <span className="text-xl font-bold">Bachelor of Information Technology (Software Development)</span>
          <hr/>
          <span className="text-lg font-semibold">GPA: 6.44</span>
          <br />
          <span className="text-lg font-semibold">Achievements</span>
          <ul className="list-disc list-inside">
            <li>Chancellor's Letter of Commendation 2020 (Top 5%)</li>
            <li>Merit Award for Outstanding Performance 2021</li>
            <li>Merit Award for Outstanding Performance 2022</li>
            <li>Received Golden Key International Honour Society Membership</li>
          </ul>
          <p className="mt-5 max-w-xl">Graduating in the first half of 2023, and starting as an experiment in 2020, this was
          where I discovered my passion for software engineering.</p>
        </div>
      </div>
      <div className="flex mt-32 justify-center gap-md-56 mb-20 bg-zinc-950">
        <div className="mx-10 mt-32">
            <span className="text-xl font-bold">Associate Degree of Arts</span>
            <hr/>
            <span className="text-lg font-semibold">GPA: XXX</span>
            <br />
            <span className="text-lg font-semibold">Specialisations</span>
            <ul className="list-disc list-inside">
              <li>Business & Management</li>
              <li>Psychology</li>
              <li>Assorted interest subjects in political science and bioscience.</li>
            </ul>

            <p className="mt-5 max-w-xl">I've always had a good mind for management, people, and diplomacy, and this was to become my first foray in to academia.
            </p>
          </div>
          <Image src={flindersLogo} style={{objectFit: "contain"}} width={350} alt="UniSA STEM Logo" className="mx-10 mt-32 mb-20"/>
      </div>
      <div className="my-32 items-center flex justify-center text-center flex-col ">
        <h1 className="mb-5 text-5xl">Interested?</h1>
        <Link href="/contact" className="text-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-black border-1.1">
          Contact
        </Link>
      </div>
    </main>
  )
}
