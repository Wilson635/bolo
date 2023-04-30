import * as React from 'react';
import NavBar from '../components/Navbar';
import { FcCustomerSupport } from "react-icons/fc";
import { HiArrowDownTray, HiBriefcase, HiChartPie, HiCommandLine, HiFolder, HiMegaphone, HiNewspaper, HiOutlineArrowLongRight, HiUserGroup } from "react-icons/hi2";
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <>
            {/* -- header start -- */}
            <NavBar />
            {/* -- header end -- */}

            {/* -- category start -- */}
            <div className="bg-white">
                <div className="text-center">
                    <h3 className="text-4xl font-bold tracking-tight text-gray-900 py-12 sm:text-5xl lg:text-6xl">
                        One Platform <br/>
                        Many <span className="text-blue-500">Solutions</span>
                    </h3>
                </div>
                <div className="py-16">
                    <div className="mx-auto max-w-7xl px-2 md:px-2">
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:gap-6">
                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiMegaphone className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Marketing &
                                        Communication
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex text-left  cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap">
                                    <HiBriefcase className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Buisiness 
                                        & Consulting
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiCommandLine className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Design &
                                        Development
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiUserGroup className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Human Research &
                                        Development
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiChartPie className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                    Finance Management
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiNewspaper className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Government Jobs
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <FcCustomerSupport className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Customer Support Care
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            <div className="group flex cursor-pointer flex-col rounded-xl border border-gray-500/10 bg-white px-5 py-8 shadow-lg shadow-slate-300 duration-200 hover:bg-blue-500">
                                <div className="flex-wrap text-left">
                                    <HiFolder className="text-blue-500 text-6xl group-hover:text-white" />
                                    <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white text-left">
                                        Project Management
                                    </h4>
                                </div>
                                <p className="flex gap-24 mt-5 text-sm font-medium text-slate-500 duration-200 group-hover:text-blue-200">
                                    237 Jobs Available <HiOutlineArrowLongRight className='text-2xl'/>
                                </p>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>
            {/* -- category end -- */}

            {/* -- category start -- */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-8 md:px-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 py-12 sm:text-4xl">
                            Featured Job Circulars
                        </h3>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                        <div className="w-full duration-200 hover:scale-95">
                            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                                <img src='/assets/person1.png' alt="ui" className="w-full"/>
                            </div>
                            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                                <div className="">
                                    <a href="#"
                                       className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Web Programming</a>
                                    <a href="#"
                                       className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Web Design</a>
                                    <a href="#"
                                       className="block pt-4 font-medium capitalize text-slate-800">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.
                                    </a>
                                </div>
                                <hr className="my-4 border-slate-100" />
                                <div className="flex">
                                    <img src='/assets/person2.png' alt="ui" className="mr-3 h-10 w-10 rounded-full object-cover"/>
                                    <p className="text-sm font-semibold capitalize text-slate-600">Wilson <span
                                        className="block text-xs text-slate-400">web designer</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full duration-200 hover:scale-95">
                            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                                <img src='/assets/person1.png' alt="ui" className="w-full"/>
                            </div>
                            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                                <div className="">
                                    <a href="#"
                                       className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Web Master</a>
                                    <a href="#"
                                       className="block pt-4 font-medium capitalize text-slate-800">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.
                                    </a>
                                </div>
                                <hr className="my-4 border-slate-100" />
                                <div className="flex">
                                    <img src='/assets/person1.png' alt="ui" className="mr-3 h-10 w-10 rounded-full object-cover"/>
                                    <p className="text-sm font-semibold capitalize text-slate-600">Penpen <span
                                        className="block text-xs text-slate-400">Front developer</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full duration-200 hover:scale-95">
                            <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                                <img src='/assets/person1.png' alt="ui" className="w-full"/>
                            </div>
                            <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                                <div className="">
                                    <a href="#"
                                       className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Web Programming</a>
                                    <a href="#"
                                       className="mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600">Design</a>
                                    <a href="#"
                                       className="block pt-4 font-medium capitalize text-slate-800">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.
                                    </a>
                                </div>
                                <hr className="my-4 border-slate-100" />
                                <div className="flex">
                                    <img src='/assets/person2.png' alt="ui" className="mr-3 h-10 w-10 rounded-full object-cover"/>
                                    <p className="text-sm font-semibold capitalize text-slate-600">Samuel <span
                                        className="block text-xs text-slate-400">Back developer</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-8 justify-center items-center" >
                        <button
                            className="flex gap-4 justify-center items-center border-2 capitalize text-blue-500 text-center rounded-[85px] px-9 py-2 text-lg font-semibold  hover:bg-blue-900"
                        >
                            Find more job <HiOutlineArrowLongRight className='text-2xl'/>
                        </button>
                    </div>
                </div>

            </div>
            {/* -- category end -- */}

            {/* -- upload cv start -- */}
            <div className="bg-white m-8">
                <div className="mx-auto max-w-7xl px-8 md:px-6 bg-blue-500 rounded-[25px]">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:gap-10">
                        <div className="w-full h-full">
                            <img src='/assets/person2.png' alt="upload" className="py-10" />
                        </div>
                        <div className="justify-center items-center text-left">
                            <h1 className="text-5xl text-left text-white justify-center items-center font-semibold sm:mt-[50px] md:mt-[100px]">
                                Get Matched The Most
                                Valuable Jobs, Just Drop
                                Your CV at Staffing Solutions
                            </h1>
                            <p className="text-sm mt-5 text-justify text-white">
                                In the subject line of email, write your name, the description of the position you want to apply
                            </p>
                            <button className="bg-white gap-2 text-blue-500 rounded-lg text-center px-2 py-2 mt-3 sm:mb-9 flex flex-row justify-center items-center"> <HiArrowDownTray /> Upload Your CV </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- upload cv end -- */}

            {/* -- footer end -- */}
            <Footer />
            {/* -- footer end -- */}
        </>
    );
}