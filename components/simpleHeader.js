export default function SimpleHeader() {
  return (
    <>
      <div className="relative flex h-24 bg-gray-100 dark:bg-gray-800">
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
                  className="mx-5 text-lg text-gray-900 cursor-pointer hover:underline hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  About
                </a>
                <a
                  href="/projects"
                  className="mx-5 text-lg text-gray-900 cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.medicine2code.com"
                  className="mx-5 text-lg text-gray-900 cursor-pointer hover:text-gray-300 dark:text-white dark:hover:text-gray-300 dark:text-opacity-85"
                >
                  Blog
                </a>
              </div>
              <div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
