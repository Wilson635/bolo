import Footer from "@/components/Footer"
import NavBar from "@/components/Navbar"
import Image1 from "@/public/assets/image-1.jpg"
import Head from "next/head"
import Image from "next/image"
import { RiDoubleQuotesL } from "react-icons/ri"
import { TbCircleArrowRightFilled } from "react-icons/tb"
const Testimony = () => {
  const dataArray = [
    {
      id: 1,
      imageSrc: Image1,
      name: "Michael",
      company: "MDS Manufacturing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quis earum deserunt Itaque sint, a eos.",
    },
    {
      id: 2,
      imageSrc: Image1,
      name: "John",
      company: "ABC Corporation",
      description:
        "Eveniet, maxime nulla qui quas consectetur, ullam, perspiciatis nam saepe laboriosam molestias excepturi dignissimos cumque molestiae?",
    },
    {
      id: 3,
      imageSrc: Image1,
      name: "Sarah",
      company: "XYZ Industries",
      description:
        "Officiis, harum doloremque. Itaque sint, a eos praesentium temporibus perferendis maxime deserunt quidem cum sed nostrum.",
    },
    // Ajouter plus d'objets si nécessaire
  ]

  return (
    <div>
      <Head>
        <title>Testimonials | Bolo</title>
        <meta name="description" content="Bolo - Find your dream job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="mb-20 mt-28">
        <div className="relative flex flex-col bg-blue-800 md:mx-10">
          <div className="mx-auto -mt-24 flex h-44 w-44 items-center justify-center rounded-full bg-blue-400 md:ml-20">
            <RiDoubleQuotesL className="text-8xl text-white" />
          </div>
          <div className="static flex flex-col items-center gap-3 py-8 md:pb-28 lg:flex-row lg:justify-around">
            <div
              className="flex max-w-xs flex-col gap-3 text-center
                       text-white lg:text-left"
            >
              <h1 className="text-4xl font-bold">Connect with other members</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptates soluta, iure debitis distinctio dicta dolorum, fugiat
                minus laboriosam vel ad! A amet nisi atque qui eveniet eos
                obcaecati vero.
              </p>
              <button className="flex items-center justify-center gap-2 text-2xl font-semibold hover:underline lg:justify-start">
                <div>Connect now</div>
                <TbCircleArrowRightFilled />
              </button>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              {dataArray.map((data) => (
                <div
                  key={data.id}
                  className="w-64 rounded-lg border border-gray-200 bg-white shadow-md"
                >
                  <Image
                    src={data.imageSrc}
                    alt=""
                    width={250}
                    height={250}
                    className="w-full rounded-t-lg"
                  />
                  <div className="px-8 py-5">
                    <p>{data.description}</p>
                    <h2 className="pt-5 font-bold">{data.name}</h2>
                    <p className="italic text-gray-600">{data.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Testimony
