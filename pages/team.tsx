import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person2 from "@/public/assets/person2.png"
import Head from "next/head"
import Image from "next/image"
import React from "react"

import * as Yup from "yup"

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Your Team | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="">
        {/*partie haute notre equipe*/}
        <div className=" bg-gray-100">
          <div
            className="
                        mx-auto
                        w-1/2
                        py-5
                    "
          >
            <div
              className="
                        pb-5
                        text-center
                        text-lg
                        font-bold
                        sm:text-3xl
                        md:text-5xl 
                        lg:text-6xl
                    "
            >
              Notre Equipe
            </div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
              consectetur adipisicing elit.
            </div>
          </div>
          <div
            className="
                    mx-auto
                    flex
                    w-1/2
                    gap-3
                "
          >
            <div
              className="
                    max-w-[400px]
                    flex-1
                    rounded-t-[70px]
                    rounded-br-3xl
                    before:block
                    before:h-[60px] 
                    before:w-[10px]
                    before:bg-purple-500
                "
            >
              <img
                src="/assets/person6.jpg"
                className="
                        mx-auto
                        h-[150px]
                        w-[200px]
                        rounded-bl-[50px]
                        rounded-tl-[100px]
                        rounded-tr-2xl
                        sm:h-[200px]
                        sm:w-[250px]
                       
                    "
              />
            </div>
            <div
              className="
                    invisible
                    max-w-[400px]
                    flex-1
                    after:block
                    after:h-[60px]
                    after:w-[10px] 
                    after:rounded-b-full
                    after:rounded-t-full
                    after:bg-blue-500
                    md:visible
                "
            >
              <img
                src="/assets/person7.jpg"
                className="
                        mx-auto
                        h-[150px]
                        w-[150px]
                        rounded-br-[100px]
                        rounded-tl-[75px]
                        sm:h-[200px]
                        sm:w-[200px]
                    "
              />
            </div>
          </div>
          {/* carre blue*/}
          <div
            className="
                        mt-10  
                          flex
                          flex-row
                          bg-blue-500
                          py-10
                    "
          >
            {/*=================================== partie de gauche ===============================================*/}
            <div className="ml-5 mt-5 flex-1 space-y-5 sm:justify-center">
              <div className="text-4xl font-extrabold">Professionnel</div>
              <div
                className="
                        text-lg
                        font-bold
                        md:text-2xl
                        lg:text-4xl

                    "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <div className="hidden sm:visible ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam, minus autem ducimus vitae est numquam, nemo enim eum
                molestiae maxime possimus. Doloribus modi, aspernatur pariatur
                delectus dicta soluta ut vero!
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam, minus autem ducimus vitae est numquam, nemo enim eum
                molestiae maxime possimus. Doloribus modi, aspernatur pariatur
                delectus dicta soluta ut vero!
              </div>
              <button
                className="
                            tr-1
                            w-[100px]
                            rounded-2xl
                            bg-black
                           p-3
                            text-white
                            hover:bg-gray-800
                            active:bg-gray-600
                        "
              >
                More
              </button>
            </div>

            {/*===================================partie de droite===============================================*/}
            <div className="flex flex-1">
              <div
                className="
                      hidden   gap-5 md:flex
                    "
              >
                <div
                  className="
                            h-[200px]
                            w-[200px]
                            rounded-full
                            bg-[url('/assets/person10.jpg')]
                            bg-cover
                            bg-no-repeat
                        "
                ></div>

                <div
                  className="
                            h-[200px]
                            w-[200px]
                            rounded-full
                            bg-[url('/assets/person9.jpg')]
                            bg-cover
                            bg-no-repeat
                        "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
