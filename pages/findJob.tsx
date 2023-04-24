import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person4 from "@/public/assets/person4.jpg"
import Head from "next/head"
import Image from "next/image"
import { HiOutlineBell, HiOutlineEnvelope } from "react-icons/hi2"
const FindJob = () => {
  return (
    <div>
      <Head>
        <title>About | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mx-auto my-5 max-w-7xl px-5">
        <div className="flex justify-between">
          <div className="flex w-3/4 items-center justify-between">
            <div className="text-3xl font-bold">
              Welcome Back, Let&apos;s Find Your Job!!
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-500 p-1">
                <HiOutlineEnvelope className="text-xl" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-500 p-2 ">
                <HiOutlineBell className="text-xl" />
              </div>
              <div className="ml-10 h-12 border-l-2 border-gray-500"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src={Person4}
                height={500}
                width={500}
                alt="Bolo"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold">Berboss</div>
              <div className="text-sm text-zinc-400">
                Douala Beedi, Next js, ID
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FindJob
