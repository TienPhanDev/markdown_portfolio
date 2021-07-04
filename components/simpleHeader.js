import Toggle from './themeToggle';

export default function SimpleHeader() {
  return (
    <>
      <div className="flex bg-gray-100 relative h-24 dark:bg-gray-800">
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
                  className="hover:underline text-lg mx-5 text-gray-900 cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="text-lg mx-5 text-gray-900 cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.medicine2code.com"
                  className="text-lg mx-5 text-gray-900 cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  Blog
                </a>
              </div>
              <Toggle className="right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6" />
              <div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
