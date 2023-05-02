import Logo from "@/public/assets/bolo.png"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { RxCross1 } from "react-icons/rx"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center text-xl font-semibold tracking-tight">
              <Link href="/homePage">
                <Image src={Logo} width={40} height={40} alt={""} />
              </Link>
            </div>
            <div>
              {isOpen && (
                <div>
                  <div
                    className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm"
                    onClick={toggleMenu}
                  ></div>
                  <div
                    className="fixed inset-x-4 top-8 z-50 origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5"
                    tabIndex={-1}
                  >
                    <div className="flex flex-row-reverse items-center justify-between">
                      <button
                        aria-label="Close menu"
                        className="-m-1 p-1"
                        type="button"
                        onClick={toggleMenu}
                        tabIndex={0}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 text-zinc-500"
                        >
                          <path
                            d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <h2 className="text-sm font-medium text-zinc-600">
                        Navigation
                      </h2>
                    </div>
                    <nav className="mt-6">
                      <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                        <li>
                          <Link href="/HomePage" legacyBehavior>
                            <a className="block py-2">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about" legacyBehavior>
                            <a className="block py-2">About</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/findJob" legacyBehavior>
                            <a className="block py-2">Find job</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/postJob" legacyBehavior>
                            <a className="block py-2">Post job</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/login" legacyBehavior>
                            <a className="block py-2 font-bold">Login</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/register" legacyBehavior>
                            <a className="block py-2 font-bold">
                              Create an account
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden font-semibold lg:ml-10 lg:flex lg:items-center lg:space-x-6">
              <Link href="/homePage" legacyBehavior>
                <a className="block py-2">Home</a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="block py-2">About</a>
              </Link>
              <Link href="/findJob" legacyBehavior>
                <a className="block py-2">Find job</a>
              </Link>
              <Link href="/postJob" legacyBehavior>
                <a className="block py-2">Post job</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="group w-full max-w-lg cursor-pointer lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="border-skin-base text-skin-base bg-skin-body text-skin-muted group-hover:bg-skin-card-gray w-full rounded-md border py-2 pl-4 pr-12 text-sm font-normal leading-5">
                  Search...
                </div>
                <div
                  className="pointer-events-none absolute inset-y-0
                             right-0 flex py-1.5 pr-2"
                >
                  <kbd
                    className="border-skin-base text-skin-muted
                    inline-flex items-center rounded border px-2
                    font-sans text-sm font-medium"
                  >
                    <HiMagnifyingGlass />
                  </kbd>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              {isOpen ? <RxCross1 /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className="hidden lg:ml-6 lg:flex lg:items-center">
            <div className="relative flex items-center space-x-6 font-sans">
              <Link href="/login" legacyBehavior>
                <a className="text-skin-menu hover:text-skin-menu-hover inline-flex items-center text-sm font-medium">
                  Login
                </a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className="text-skin-menu hover:text-skin-menu-hover inline-flex items-center text-sm font-medium">
                  Create an account
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
