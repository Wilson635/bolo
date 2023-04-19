import Image from "next/image";
import AboutPic from "@/public/assets/about-us.png";
import NavBar from "@/components/Navbar";
const About = () => {
  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto my-5">
        <div className="grid gap-5 pt-20 rounded-2xl bg-slate-200">
          <h1 className="text-5xl font-semibold text-center">
            We're changing the whole game
          </h1>
          <div className="flex justify-center gap-20">
            <a
              href="#"
              className="p-3 px-6 text-white bg-black font-bold
                       w-52 text-center rounded-full"
            >
              Get Started
            </a>
            <a
              href="#"
              className="p-3 px-6 text-black bg-slate-200 border border-black font-bold
                       w-52 text-center rounded-full"
            >
              View Pricing
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src={AboutPic}
              width={500}
              height={500}
              alt={""}
              className="rounded-lg"
            />
          </div>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default About;
