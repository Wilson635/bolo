import NavBar from "@/components/Navbar"

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main className="mx-16 flex flex-col gap-16 py-10">
        <div className="flex justify-between">
          <div className="flex max-w-lg flex-1 flex-col gap-5 bg-red-100">
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
          <div className="max-w-lg flex-1 bg-green-200">B</div>
        </div>
        <div className="grid gap-8">
          <h1 className="text-center text-3xl font-bold">
            Easy way to get your next job
          </h1>
          <div className="flex gap-5 px-5">
            <div className="h-44 max-w-xs bg-slate-200 p-5">
              <h1 className="text-xl font-bold">Register An Account</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
            <div className="h-44 max-w-lg p-5 shadow-2xl shadow-red-700">
              <h1 className="text-xl font-bold">Search Your Job</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
            <div className="h-44 max-w-xs bg-slate-200 p-5">
              <h1 className="text-xl font-bold">Apply For Job</h1>
              <p className="italic">
                We offer a wide range of services that help businesses improve
                their online visibility.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
