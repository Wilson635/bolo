import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import ReactSlidy from 'react-slidy'
import person from '/assets/person1.png'
import 'react-slidy/lib/styles.css'
import Image from "next/image"


const inter = Inter({ subsets: ['latin'] })

export default function PostJob() {
  return (
    <>
      <NavBar />
      <ReactSlidy fullHeight imageObjectFit="contain" useFullWidth={false}>
        <Image src="/assets/person0.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person5.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person0.png" alt="bolo" width={400} height={400} />
        <Image src="/assets/person5.png" alt="bolo" width={400} height={400} />
      </ReactSlidy>
      {/* <!-- ====== Form Elements Section Start --> */}
      <section className="mx-10 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-12">
                <label htmlFor="roll">Roll Number</label>
                <input
                  type="text"
                  id="roll"
                  name="roll"
                  required={true}
                  minLength={2}
                  maxLength={5}
                />
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <button type="submit">Submit</button>
                <label className="mb-3 block text-base font-medium text-black">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Job Category
                </label>
                <div className="relative">
                  <select className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                    <option value="">Technology</option>
                    <option value="">Technology</option>
                    <option value="">Technology</option>
                    <option value="">Technology</option>
                    <option value="">Technology</option>
                  </select>
                  <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2"></span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Job Type
                </label>
                <div className="relative">
                  <select className="border-form-stroke text-body-color focus:border-primary active:border-primary w-full appearance-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                    <option value="">Full Time</option>
                    <option value="">Full Time</option>
                    <option value="">Full Time</option>
                    <option value="">Full Time</option>
                    <option value="">Full Time</option>
                  </select>
                  <span className="border-body-color absolute right-4 top-1/2 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2"></span>
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
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
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="lg:w-12/12 w-full px-4 md:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black">
                  Job Description
                </label>
                <textarea
                  rows={8}
                  placeholder="Job Description"
                  className="border-primary text-body-color placeholder-body-color focus:border-primary active:border-primary resize-none rounded-lg border-[1.5px] px-5 py-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] max-sm:w-full sm:w-[1020px] md:w-full lg:w-[1020px] xl:w-[1280px]"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Form Elements Section End --> */}
      <Footer />
    </>
  );
}