import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import Image1 from "@/public/assets/blog/image1.jpg"
import Image2 from "@/public/assets/blog/image2.jpg"
import Image3 from "@/public/assets/blog/image3.jpg"
import Image4 from "@/public/assets/blog/image4.jpg"
import Image5 from "@/public/assets/blog/image5.jpg"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import {
  HiArrowDownCircle,
  HiOutlineArrowDown,
  HiOutlineArrowDownCircle,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2"

const Blog = () => {
  const cardsData = [
    {
      imageSrc: Image1,
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline projects, sprints, tasks, and bug tracking. Here's how to get started.",
      tags: ["Product", "Tools", "Saas"],
    },
    {
      imageSrc: Image2,
      author: "Natalli Craig",
      date: "14 Jan 2022",
      title: "How collaboration makes us better designers",
      description:
        "Collabortion can make our teams stronger, and our individual designs better.",
      tags: ["Design", "Research"],
    },
    {
      imageSrc: Image3,
      author: "Lana Steiner",
      date: "20 Jan 2022",
      title: "Building a React Component Library",
      description:
        "Learn how to build a reusable component library in React using Storybook and styled components.",
      tags: ["React", "Storybook", "Styled"],
    },
    {
      imageSrc: Image4,
      author: "Candice Wu",
      date: "05 Mar 2022",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Product", "Frameworks"],
    },
    {
      imageSrc: Image5,
      author: "Alex Whitten",
      date: "17 Jan 2022",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      tags: ["Software", "Development", "Tools"],
    },
    {
      imageSrc: Image1,
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline projects, sprints, tasks, and bug tracking. Here's how to get started.",
      tags: ["Product", "Tools", "Saas"],
    },
  ]

  return (
    <>
      <Head>
        <title>Blog | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mx-10 my-20">
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-5xl font-bold">Writings from our team</h1>
          <p className="text-slate-500">
            The latest industry news, interviews, technologies, and resources.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href="/blog/article">
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cardsData.map((cardData, index) => (
                <div
                  key={index}
                  className="flex w-full max-w-sm flex-col gap-2"
                >
                  <Image src={cardData.imageSrc} alt={""} />
                  <h3 className="pt-2 text-sm font-semibold text-purple-500">
                    {cardData.author} - {cardData.date}
                  </h3>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{cardData.title}</h2>
                    <FiArrowUpRight className="text-2xl text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-600">
                    {cardData.description}
                  </p>
                  <div className="flex gap-2 font-semibold">
                    {cardData.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="rounded-3xl border border-blue-500 px-2 text-sm text-blue-500"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Link>

          <button className="mt-10 flex items-center rounded-3xl bg-slate-900 p-2 px-3 text-white">
            <HiOutlineArrowDownCircle className="text-2xl" />
            <span className="ml-2 text-lg font-bold">Load More</span>
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Blog
