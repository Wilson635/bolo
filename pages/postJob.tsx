import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import ReactSlidy from 'react-slidy'
import person from '/assets/person1.png'
import 'react-slidy/lib/styles.css'


const inter = Inter({ subsets: ['latin'] })

export default function PostJob() {
  return (
    <>
        <NavBar />
        <ReactSlidy fullHeight imageObjectFit="contain" useFullWidth={false}>
            <img src='/assets/person1.png' alt='bolo' />
            <img src='/assets/person2.png' alt='bolo' />
            <img src='/assets/person1.png' alt='bolo' />
            <img src='/assets/person2.png' alt='bolo' />
        </ReactSlidy>
        {/* <!-- ====== Form Elements Section Start --> */}
        <section className="pt-20 pb-10 mx-10 lg:pt-[120px] lg:pb-20">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Company Website
                        </label>
                        <input
                            type="text"
                            placeholder="Website Link"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Job Title
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Job Category
                        </label>
                        <div className="relative">
                            <select
                            className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                            >
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            <option value="">Technology</option>
                            </select>
                            <span
                            className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"
                            >
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Job Type
                        </label>
                        <div className="relative">
                            <select
                            className="w-full appearance-none rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                            >
                            <option value="">Full Time</option>
                            <option value="">Full Time</option>
                            <option value="">Full Time</option>
                            <option value="">Full Time</option>
                            <option value="">Full Time</option>
                            </select>
                            <span
                            className="absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"
                            >
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-8/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Job Location
                        </label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-4/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Salary Range
                        </label>
                        <input
                            type="text"
                            placeholder="Salary Range"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-5/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Experience
                        </label>
                        <input
                            type="text"
                            placeholder="Experience"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-7/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Qualification
                        </label>
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="w-full rounded-lg border-[1.5px] border-primary py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        />
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-12/12">
                        <div className="mb-12">
                        <label className="mb-3 block text-base font-medium text-black">
                            Job Description
                        </label>
                        <textarea
                            rows={8}
                            placeholder="Job Description"
                            className="xl:w-[1280px] lg:w-[1020px] max-sm:w-full md:w-full sm:w-[1020px] rounded-lg border-[1.5px] border-primary py-3 px-5 resize-none font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                        ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ====== Form Elements Section End --> */}
        <Footer />
    </>
  )
}