
import Image  from "next/image";
import unisaLogo from "../resources/unisa_stem_logo.png";
import flindersLogo from "../resources/flinders2.png";
import Link from 'next/link';
import Atavis from '../resources/atavis.png';

export default function Home() {
  return (
    <main className="bg-zinc-900 justify-center mt-24 flex flex-col text-white">
      <div className="bg-zinc-950 shadow-md">
        <div className="flex items-center justify-center">
          <Image src={Atavis} alt="Atavis" width={200} height={200} className="rounded-full h-36 w-36 border-black shadow-lg bg-cover" />
        </div>

        <p className="text-center text-white mt-5 text-xl mb-20">
          I love to build things on the intertubes.
          <br />
          My passion is anything React, Next.js, and Tailwind CSS. I&apos;m also great with anything .NET related.
          <br />
          As a solid team player, I make a great member of any team and I focus on the big picture of getting the job done.
        </p>
      </div>

      <div className="flex flex-col lg:py-28 items-center lg:flex-row lg:justify-center shadow-lg">
        <Image src={unisaLogo} style={{ objectFit: "contain" }} width={400} alt="UniSA STEM Logo" className="mt-20 mb-20 lg:order-0 lg:mx-10" />

        <div className="text-start px-4 lg:mr-10 sm:pb-12 pb-20">
          <span className="text-xl font-bold">Bachelor of Information Technology (Software Development)</span>
          <hr />
          <span className="text-lg font-semibold">GPA: 6.44</span>
          <br />
          <span className="text-lg font-semibold">Achievements</span>
          <ul className="list-disc list-inside">
            <li>Chancellor&apos;s Letter of Commendation 2020 (Top 5%)</li>
            <li>Merit Award for Outstanding Performance 2021</li>
            <li>Merit Award for Outstanding Performance 2022</li>
            <li>Received Golden Key International Honour Society Membership</li>
          </ul>
          <p className="mt-5 max-w-xl">Graduating in the first half of 2023, and starting as an experiment in 2020, this was where I discovered my passion for software engineering.</p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center sm:flex-col-reverse bg-zinc-950">
        <div className="text-center px-4 lg:ml-10 sm:order-last mt-20 sm:mb-20">
          <Image src={flindersLogo} style={{ objectFit: "contain" }} width={350} alt="Flinders University Logo" className="mb-20" />
        </div>
        <div className="text-start px-4 lg:ml-10 mb-20">
          <span className="text-xl font-bold">Associate Degree of Arts</span>
          <hr />
          <span className="text-lg font-semibold">GPA: XXX</span>
          <br />
          <span className="text-lg font-semibold">Specialisations</span>
          <ul className="list-disc list-inside">
            <li>Business & Management</li>
            <li>Psychology</li>
            <li>Assorted interest subjects in political science and bioscience.</li>
          </ul>
          <p className="mt-5 max-w-xl">I&apos;ve always had a good mind for management, people, and diplomacy, and this was to become my first foray into academia.</p>
        </div>
      </div>

      <div className="my-32 items-center flex justify-center text-center flex-col">
        <h1 className="mb-5 text-5xl">Interested?</h1>
        <Link href="/contact" className="text-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl border-black border-1.1">
          Contact
        </Link>
      </div>
    </main>
  );
}

