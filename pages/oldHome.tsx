import NavBar from "@/components/Navbar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col gap-16 mx-16 py-10">
        <div className="flex justify-between">
          <div className="bg-red-100 flex flex-1 flex-col max-w-lg gap-5">
            <h1 className="text-5xl font-bold">
              Let&apos;s Find Your Dream Job Here
            </h1>
            <p>
              We offer a wide range of services that help businesses improve
              their online visibility and drive more traffic to their website.
              Our team of experts uses proven SEO techniques and a{" "}
            </p>
            <h2 className="text-3xl font-bold">We are trusted by:</h2>
          </div>
          <div className="bg-green-200 flex-1 max-w-lg">B</div>
        </div>
        <div className="grid gap-8">
          <h1 className="text-3xl font-bold text-center">
            Easy way to get your next job
          </h1>
          <div className="flex gap-5 px-5">
            <div className="max-w-xs h-44 p-5 bg-slate-200">
              <h1 className="font-bold text-xl">Register An Account</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
            <div className="max-w-lg h-44 p-5 shadow-2xl shadow-red-700">
              <h1 className="font-bold text-xl">Search Your Job</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
            <div className="max-w-xs h-44 p-5 bg-slate-200">
              <h1 className="font-bold text-xl">Apply For Job</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
