/* eslint-disable jsx-a11y/accessible-emoji */
import LandingFooter from '../components/landingFooter';

export default function Landing() {
  return (
    <>
      <div className="relative h-screen overflow-hidden bg-indigo-900 dark:bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80g"
          alt="..."
          className="absolute object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container px-6 py-4 mx-auto md:px-12">
            <div className="items-center justify-center md:flex">
              <div className="flex items-center justify-between">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="w-12 h-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="items-center hidden text-lg uppercase md:flex">
                <a
                  href="/about"
                  className="mx-5 text-lg text-white cursor-pointer hover:text-gray-300"
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="mx-5 text-lg text-white cursor-pointer hover:text-gray-300"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.medicine2code.com"
                  className="mx-5 text-lg text-white cursor-pointer hover:text-gray-300"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
              Tien Phan
            </h1>
            <p className="text-gray-300">(excuse the current construction 👷)</p>
            <a
              href="https://www.linkedin.com/in/tien-phan-dc/"
              className="block px-4 py-3 mt-10 text-lg font-bold text-gray-100 uppercase bg-gray-900 hover:text-gray-400 dark:text-gray-700"
            >
              connect with me
            </a>
          </div>
        </div>
        <LandingFooter />
      </div>
    </>
  );
}
