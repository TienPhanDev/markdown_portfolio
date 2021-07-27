/* eslint-disable jsx-a11y/accessible-emoji */
import LandingFooter from '../components/landingFooter';

export default function Landing() {
  return (
    <>
      <div className="bg-indigo-900 relative overflow-hidden h-screen dark:bg-gray-800">
        <img
          src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80g"
          alt="..."
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-center items-center">
              <div className="flex justify-between items-center">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="h-12 w-12"
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
              <div className="hidden md:flex items-center text-lg uppercase">
                <a
                  href="/about"
                  className="text-lg mx-5 text-white cursor-pointer hover:text-gray-300"
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="text-lg mx-5 text-white cursor-pointer hover:text-gray-300"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.medicine2code.com"
                  className="text-lg mx-5 text-white cursor-pointer hover:text-gray-300"
                >
                  Blog
                </a>
              </div>
              {/* <div>
                <Toggle className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6" />
              </div> */}
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
              Tien Phan
            </h1>
            <p className="text-gray-300">(excuse the current construction 👷)</p>
            <a
              href="https://www.linkedin.com/in/tien-phan-dc/"
              className="block hover:bg-gray-900 py-3 px-4 text-lg text-gray-100 font-bold uppercase mt-10 dark:text-gray-700 bg-gray-900"
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
