import React from "react"
import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import AboutPic from "@/public/assets/about-us.png"
import Icon from "@/public/assets/icon.png"
import Person1 from "@/public/assets/person1.png"
import Person2 from "@/public/assets/person2.png"
import Head from "next/head"
import Image from "next/image"

import * as Yup from 'yup'





 const Contact = () => {


  return (
    <div>
      <Head>
        <title>Contact US | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
        <main className="">

            {/*partie haute notre equipe*/}
            <div className=" bg-gray-100" >
                <div
                    className="
                        w-1/2
                        mx-auto
                        py-5
                    "
                >
                <div
                    className="
                        text-lg
                        sm:text-3xl
                        md:text-5xl
                        lg:text-6xl
                        font-bold
                        text-center 
                        pb-5
                    "
                >Notre Equipe</div>
                <div className="text-sm">
                    Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit.
                    amet consectetur adipisicing elit.
                </div>
            </div>
            <div 
                className="
                    flex
                    gap-3
                    w-1/2
                    mx-auto
                "
            >
                <div className="
                    flex-1
                    rounded-t-[70px]
                    rounded-br-3xl
                    max-w-[400px]
                    before:block
                    before:w-[10px] 
                    before:h-[60px]
                    before:bg-purple-500
                "
                >
                    <img 
                    src='/assets/person6.jpg'
                    className="
                        w-[200px]
                        h-[150px]
                        sm:h-[200px]
                        sm:w-[250px]
                        mx-auto
                        rounded-tr-2xl
                        rounded-bl-[50px]
                        rounded-tl-[100px]
                       
                    "
                    />
                </div>
                <div className="
                    invisible
                    md:visible
                    max-w-[400px]
                    flex-1
                    after:block
                    after:w-[10px] 
                    after:h-[60px]
                    after:bg-blue-500
                    after:rounded-t-full
                    after:rounded-b-full
                "
                >
                    <img 
                    src='/assets/person7.jpg'
                    className="
                        w-[150px]
                        h-[150px]
                        sm:h-[200px]
                        sm:w-[200px]
                        mx-auto
                        rounded-br-[100px]
                        rounded-tl-[75px]
                    "
                    />
                </div> 
                
            </div>
            {/* carre blue*/}
            <div
                    className="
                        bg-blue-500  
                          flex
                          flex-row
                          mt-10
                          py-10
                    "
                >

                 {/*=================================== partie de gauche ===============================================*/}
                <div className='flex-1 mt-5 ml-5 space-y-5 sm:justify-center'>
                   <div className="text-4xl font-extrabold">Professionnel</div>
                   <div
                    className="
                        text-lg
                        md:text-2xl
                        lg:text-4xl
                        font-bold

                    "
                   >Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                   </div>
                   <div className="hidden sm:visible ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, minus autem ducimus vitae est numquam, nemo enim eum molestiae maxime possimus. Doloribus modi, aspernatur pariatur delectus dicta soluta ut vero!
                   </div>
                   <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, minus autem ducimus vitae est numquam, nemo enim eum molestiae maxime possimus. Doloribus modi, aspernatur pariatur delectus dicta soluta ut vero!
                   </div>
                   <button
                        className="
                            bg-black
                            hover:bg-gray-800
                            active:bg-gray-600
                            tr-1
                           text-white
                            p-3
                            rounded-2xl
                            w-[100px]
                        "
                   >
                    More
                   </button>
                </div>
                
{/*===================================partie de droite===============================================*/}
                <div className="flex-1 flex">
                    <div className="
                      hidden   gap-5 md:flex
                    ">
                    <div 
                        className="
                            bg-[url('/assets/person10.jpg')]
                            bg-cover
                            bg-no-repeat
                            h-[200px]
                            w-[200px]
                            rounded-full
                        "
                    ></div>
               
                    <div 
                        className="
                            bg-[url('/assets/person9.jpg')]
                            bg-cover
                            bg-no-repeat
                            h-[200px]
                            w-[200px]
                            rounded-full
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
