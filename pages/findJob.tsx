import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import Avatar from "@/public/assets/avatar.jpg"
import Head from "next/head"
import Image from "next/image"
import { BsBookmarkPlus, BsFillBookmarkDashFill } from "react-icons/bs"
import {
  HiMagnifyingGlass,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBell,
  HiOutlineEnvelope,
} from "react-icons/hi2"
import { MdVerified } from "react-icons/md"

const FindJob = () => {
  const jobListings = [
    {
      id: 1,
      company: "Hatypo Studio",
      position: "UI Designer",
      location: "Surakata, ID - Onsite",
      bookmarkIcon: <BsFillBookmarkDashFill className="text-2xl" />,
      rate: "$10/hour",
      time: "Part-Time",
      level: "Expert",
      requirements:
        "Strong passion and active in the social world with a track record in charity or volunteer work ...",
      paymentVerified: {
        label: "Payment verified",
        value: "$10.000+ spent",
        icon: <MdVerified />,
      },
      postedTime: "1h ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      company: "Archo",
      position: "UI Designer",
      location: "Yogyakarta, ID - Onsite",
      bookmarkIcon: <BsBookmarkPlus className="text-2xl" />,
      rate: "$5/hour",
      time: "Part-Time",
      level: "Entry",
      requirements:
        "Bachelor's degree in Design, Visual Communication Design, Industrial Design, or any related field ...",
      paymentVerified: {
        label: "Payment verified",
        value: "$300+ spent",
        icon: <MdVerified />,
      },
      postedTime: "2h ago",
      color: "bg-pink-500",
    },
    {
      id: 3,
      company: "Elux Space",
      position: "Web Developper",
      location: "Malang, ID - Onsite",
      bookmarkIcon: <BsFillBookmarkDashFill className="text-2xl" />,
      rate: "$15/hour",
      time: "Part-Time",
      level: "Expert",
      requirements:
        "Bachelor's degree in Design, Visual Communication Design, Industrial Design, or any related field ...",
      paymentVerified: {
        label: "Payment verified",
        value: "$2.000+ spent",
        icon: <MdVerified />,
      },
      postedTime: "3h ago",
      color: "bg-yellow-300",
    },
    {
      id: 4,
      company: "Quanta Hive",
      position: "UI/UX Designer",
      location: "Douala, ID - Onsite",
      bookmarkIcon: <BsFillBookmarkDashFill className="text-2xl" />,
      rate: "$35/hour",
      time: "Part-Time",
      level: "Expert",
      requirements:
        "Strong passion and active in the social world with a track record in charity or volunteer work ...",
      paymentVerified: {
        label: "Payment verified",
        value: "$18.000+ spent",
        icon: <MdVerified />,
      },
      postedTime: "3h ago",
      color: "bg-green-300",
    },
  ]

  return (
    <div>
      <Head>
        <title>Find Jobs | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex flex-col">
        <NavBar />
        <main className="mx-auto my-5 max-w-7xl px-5">
          <div className="flex justify-between">
            <div className="flex w-4/5 items-center justify-between">
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
                  src={Avatar}
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
          <div className="mt-10 flex flex-row gap-5">
            <div className="flex basis-2/5 flex-col gap-4">
              <div className="flex items-center justify-between rounded-3xl bg-black p-3 px-6 text-white">
                <div className="font-semibold">Search Result</div>
                <div className="text-sm text-neutral-400">
                  {jobListings.length} Jobs Found
                </div>
              </div>
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className={`flex w-full flex-col gap-4 rounded-3xl bg-slate-100 p-5`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-20 w-20 rounded-3xl ${job.color}`}
                      ></div>
                      <div className="flex flex-col">
                        <h1 className="text-xl font-bold">{job.company}</h1>
                        <h2 className="font-semibold">{job.position}</h2>
                        <p className="text-slate-500">{job.location}</p>
                      </div>
                    </div>
                    {job.bookmarkIcon}
                  </div>
                  <div className="flex flex-row gap-2">
                    <div className="flex h-10 basis-1/3 items-center justify-center rounded-3xl bg-white font-semibold">
                      {job.rate}
                    </div>
                    <div className="flex h-10 basis-1/3 items-center justify-center rounded-3xl bg-white font-semibold">
                      {job.time}
                    </div>
                    <div className="flex h-10 basis-1/3 items-center justify-center rounded-3xl bg-white font-semibold">
                      {job.level}
                    </div>
                  </div>
                  <div className="text-slate-500">{job.requirements}</div>
                  <div className="-mb-2 border-b border-slate-500"></div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-bold">
                        {job.paymentVerified.label} {job.paymentVerified.value}
                      </h3>
                      {job.paymentVerified.icon}
                    </div>
                    <div className="text-slate-500">{job.postedTime}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex basis-3/5 flex-col gap-4">
              <div className="flex w-full flex-row gap-3">
                <div className="flex basis-11/12 items-center gap-4 rounded-3xl bg-slate-100 px-5">
                  <div className="flex items-center gap-4 rounded-3xl bg-slate-100 px-5">
                    <div className="flex flex-row items-center gap-2">
                      <HiMagnifyingGlass className="text-3xl" />
                      <input
                        type="text"
                        className="w-96 bg-slate-100 p-2.5"
                        placeholder="UI Designer"
                      />
                    </div>
                  </div>
                </div>
                <button className="flex basis-1/12 items-center justify-center rounded-3xl bg-slate-100 p-3">
                  <HiOutlineAdjustmentsHorizontal className="text-2xl" />
                </button>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-3xl bg-blue-500"></div>
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold">Hatypo Studio</h1>
                      <h2 className="font-semibold">UI Designer</h2>
                      <p className="text-slate-400">Surakata, ID - Onsite</p>
                    </div>
                  </div>
                  <BsFillBookmarkDashFill className="text-2xl" />
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex h-20 basis-1/4 flex-col items-center justify-center gap-2 rounded-3xl bg-green-200">
                    <h3 className="text-xs font-semibold">Salary</h3>
                    <h2>
                      <span className="text-lg font-bold">$10</span> /hour
                    </h2>
                  </div>
                  <div className="flex h-20 basis-1/3 flex-col items-center justify-center gap-2 rounded-3xl bg-sky-200">
                    <h3 className="text-xs font-semibold">Job Type</h3>
                    <h2 className="text-lg font-bold">Part-Time</h2>
                  </div>
                  <div className="flex h-20 basis-1/3 flex-col items-center justify-center gap-2 rounded-3xl bg-orange-200">
                    <h3 className="text-xs font-semibold">
                      Number of Applicants
                    </h3>
                    <h2>
                      <span className="text-lg font-bold">20</span> /50
                    </h2>
                  </div>
                  <div className="flex h-20 basis-1/4 flex-col items-center justify-center gap-2 rounded-3xl bg-purple-300">
                    <h3 className="text-xs font-semibold">Skill</h3>
                    <h2 className="text-lg font-bold">Expert</h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex basis-1/2 items-center justify-center rounded-3xl bg-black p-3 font-semibold text-white">
                    Description
                  </button>
                  <button className="flex basis-1/2 items-center justify-center rounded-3xl bg-white p-3 font-semibold">
                    Company
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">Job Description</h1>
                  <ul className="list-inside list-disc text-slate-500">
                    <li>
                      Collaborate with cross-functional teams including product
                      managers, developers, and other designers to create
                      wireframes, prototypes, and high-fidelity mockups.
                    </li>
                    <li>
                      Design intuitive and visually appealing user interfaces
                      for web and mobile applications.
                    </li>
                    <li>
                      Ensure designs are consistent with brand standards and
                      user needs.
                    </li>
                    <li>
                      Develop and maintain design systems and style guides to
                      ensure consistency across products.
                    </li>
                    <li>
                      Communicate design decisions and rationale to stakeholders
                      and team members.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold">Requirement</h1>
                  <ul className="list-inside list-disc text-slate-500">
                    <li>
                      Bachelor&apos;s degree in design, computer science, or
                      related field, or equivalent work experience.
                    </li>
                    <li>
                      At least 3 years of experience designing user interfaces
                      and experiences for web and mobile applications.
                    </li>
                    <li>
                      Proficiency with design tools such as Sketch, Figma, Adobe
                      Creative Suite, and InVision.
                    </li>
                    <li>
                      Strong portfolio showcasing design work and UX
                      methodologies.
                    </li>
                    <li>
                      Experience working with cross-functional teams, including
                      product managers, developers, and other designers.
                    </li>
                    <li>
                      Understanding of user-centered design principles and
                      ability to conduct user research and usability testing.
                    </li>
                    <li>
                      Strong communication and presentation skills, with the
                      ability to clearly articulate design decisions and
                      rationale to stakeholders and team members.
                    </li>
                    <li>
                      Knowledge of front-end development languages such as HTML,
                      CSS, and JavaScript, and ability to collaborate with
                      developers to ensure designs are implemented accurately.
                    </li>
                  </ul>
                </div>
                <button className="flex items-center justify-center rounded-3xl bg-black p-3 text-xl font-semibold text-white">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="hidden basis-1/4 flex-col gap-4 xl:flex">
              <div className="flex w-full flex-col items-center gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl">
                  <Image
                    src={Avatar}
                    height={500}
                    width={500}
                    alt="Bolo"
                    className="rounded-3xl object-cover"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-bold">Rin Khimera</h1>
                  <h2 className="font-semibold">UI Designer</h2>
                  <p className="text-slate-400">Surakata, Central Java ID</p>
                </div>
                <button className="flex w-full items-center justify-center rounded-3xl bg-white p-3 font-semibold">
                  Edit Profile
                </button>
              </div>
              <div className="flex w-full flex-col items-center gap-4 rounded-3xl bg-slate-100 p-5">
                <div className="flex w-full flex-row items-center gap-3">
                  <div className="flex basis-1/2 flex-col items-center gap-3 rounded-3xl bg-white p-3 text-center">
                    <h3 className="text-sm font-semibold">Search Result</h3>
                    <h2 className="text-3xl font-bold">22</h2>
                    <h3 className="font-semibold">Views</h3>
                  </div>
                  <div className="flex basis-1/2 flex-col items-center gap-3 rounded-3xl bg-white p-3 text-center">
                    <h3 className="text-sm font-semibold">Applied Job</h3>
                    <h2 className="text-3xl font-bold">12</h2>
                    <h3 className="font-semibold">Job</h3>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center gap-3 rounded-3xl bg-white p-3 text-center">
                  <h3 className="text-sm font-semibold">Post Views</h3>
                  <h2 className="text-3xl font-bold">268</h2>
                  <h3 className="font-semibold">Views</h3>
                </div>
                <div className="flex w-full flex-col items-center gap-3 rounded-3xl bg-white p-3 text-center">
                  <h3 className="text-sm font-semibold">Experience</h3>
                  <h2 className="text-3xl font-bold">5</h2>
                  <h3 className="font-semibold">Month</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default FindJob
