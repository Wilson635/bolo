import Image from "next/image";
import AboutPic from "@/public/assets/about-us.png";
import Icon from "@/public/assets/icon.svg";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
const About = () => {
  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto my-5 px-5">
        <div className="grid gap-5 pt-20 rounded-2xl bg-slate-200">
          <h1 className="text-5xl font-semibold text-center">
            We&apos;re changing the whole game
          </h1>
          <div className="flex justify-center items-center gap-5">
            <a
              href="#"
              className="p-3 px-6 text-white bg-black font-bold
                         w-36 text-sm lg:text-base lg:w-52 text-center rounded-full"
            >
              Get Started
            </a>
            <a
              href="#"
              className="p-3 px-6 text-black bg-slate-200 border 
                       border-black font-bold w-36 text-sm lg:text-base lg:w-52 text-center rounded-full"
            >
              View Pricing
            </a>
          </div>
          <div className="flex justify-center mx-5">
            <Image
              src={AboutPic}
              width={500}
              height={500}
              alt={""}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col my-14 px-5 md:px-10 md:flex-row gap-5">
          <div className="basis-1/2 flex flex-col gap-10 justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-400">OUR STORY</h1>
              <h2 className="text-2xl font-bold">
                We&apos;re building the economic infrastructure for the
                internet. Businesses of every size
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Image src={Icon} alt={""} height={100} width={100} />
              </div>
              <div className="text-xl">
                A living place for curiosity and collaboration, meeting and
                meaning. The heart of a creative community
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-5">
            <div className="flex gap-6">
              <div className="text-2xl font-semibold">01.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">
                  6 years of intense research
                </div>
                <div className="text-sm text-zinc-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit, autem! Velit, assumenda enim iste laudantium asperiores
                  impedit maiores eos sit sequi ullam maxime, consectetur
                  blanditiis, sed quae magnam voluptatibus est.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">02.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Audience segmentation</div>
                <div className="text-sm text-zinc-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci dicta quasi ab possimus! Ratione blanditiis hic
                  magnam mollitia tempora sit suscipit harum. Minus voluptatibus
                  tenetur amet omnis officia at quod.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">03.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Contact monotoring</div>
                <div className="text-sm text-zinc-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero deserunt iure fugiat debitis quaerat. Blanditiis cum
                  eum rerum eveniet tempore molestias temporibus accusamus,
                  autem ut aliquid impedit, in excepturi ducimus?
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
