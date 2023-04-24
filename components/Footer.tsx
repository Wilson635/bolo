import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="px-5 py-2 lg:px-20">
        <hr className="border-t-1 mb-4 border-gray-300" />
        <div className="flex flex-col-reverse gap-4 lg:flex lg:flex-row lg:justify-between">
          <div className="grid grid-cols-3 justify-items-center gap-5">
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-2xl font-bold text-blue-600">
                Navigation
              </h1>
              <a href="#">Find a job</a>
              <a href="#">Post a job</a>
              <a href="#">Find companies</a>
              <a href="#">Carrier advice</a>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-2xl font-bold text-blue-600">Company</h1>
              <a href="#">The Team</a>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <h1 className="mb-5 text-2xl font-bold text-blue-600">
                Resources
              </h1>
              <a href="#">Support</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Helpful Resource</a>
            </div>
          </div>
          <div
            className="mx-auto grid w-full
                       max-w-xl justify-items-center lg:m-0 lg:max-w-md lg:justify-items-end"
          >
            <h1 className="text-2xl font-bold">Join Our Newsletter</h1>
            <p>Sign up for secrets, news and specials</p>
            <div className="flex w-full items-center justify-center pt-2 lg:justify-end lg:pt-0">
              <input
                type="text"
                placeholder="Email"
                className="w-1/2 rounded-l-2xl bg-slate-200 px-3 py-2.5 text-sm"
              />
              <button className="rounded-r-2xl bg-blue-600 p-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="mt-5 flex gap-3 text-lg ">
              <a href="#" className="transition hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaDribbble />
              </a>
              <a href="#" className="transition hover:text-blue-600">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-1 mt-4 border-gray-300" />
        <div className="mt-2 text-center">
          <p>© 2023 Bolo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
