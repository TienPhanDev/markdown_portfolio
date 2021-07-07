import Toggle from '../components/themeToggle';

export default function About() {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <section className="relative block" style={{ height: '500px' }}>
          <div className="flex relative h-24 dark:bg-gray-800 dark:hover:text-gray-300 dark:text-gray-700">
            <header className="absolute top-0 left-0 right-0 z-20">
              <nav className="container mx-auto px-4 md:px-12 py-4">
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
                  <div className="hidden md:flex items-center text-lg uppercase ">
                    <a
                      href="/about"
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85 dark:text-gray-800"
                    >
                      About
                    </a>
                    <a
                      href="https://www.medicine2code.com"
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85 dark:text-gray-800"
                    >
                      Blog
                    </a>
                    <a
                      href="/projects"
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85 dark:text-gray-800"
                    >
                      Portfolio
                    </a>
                  </div>
                  <span>
                    <Toggle className="right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6" />
                  </span>
                </div>
              </nav>
            </header>
          </div>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-gray-800"
            ></span>
          </div>

        </section>
        <section className="relative mt-2 py-14 bg-gray-200 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex justify-center">
                  <div className="inline-block">
                    <img
                      alt="author: Tien Phan"
                      src="https://i.imgur.com/vkwYgTw.jpg"
                      className="shadow-lg rounded-full h-auto align-middle border-none -mt-16 lg:-mt-20"
                      style={{ maxWidth: '311px' }}
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-3xl font-semibold leading-normal text-gray-800 mb-1">
                    Tien Phan, PharmD
                  </h3>
                  <div className="mb-1 text-gray-700 mt-2">
                    <i className="far fa-address-book mr-2 text-lg text-gray-500"></i>
                    Full Stack Software Engineer
                  </div>
                  <div className="text-sm leading-normal mt-0 -mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                    Northern Virginia/Washington D.C.
                  </div>
                </div>
                <div className="mt-6 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Hi! I am a Full Stack Software Engineer with a strong passion for problem solving. My credentials include a doctorate and previous successful Pharmacy career, but something about tech attracted me. Unable to resist the calling, I changed careers and have been rocking along ever since. I love engaging with and helping others learn coding so reach out!   
                      </p>
                      <button className="bg-gray-800 hover:bg-blue-400 text-white py-1 px-1 border-b-2 border-blue-700 hover:border-blue-500 rounded dark:text-gray-200 dark:bg-blue-900">
                        <a
                          href="https://www.linkedin.com/in/tien-phan-dc/"
                          className="uppercase"
                        >
                          click here to see my projects
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
