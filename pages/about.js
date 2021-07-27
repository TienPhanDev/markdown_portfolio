export default function About() {
  return (
    <>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <section className="relative block" style={{ height: '500px' }}>
          <div className="relative flex h-24 dark:bg-gray-800 dark:hover:text-gray-300 dark:text-gray-700">
            <header className="absolute top-0 left-0 right-0 z-20">
              <nav className="container px-4 py-4 mx-auto md:px-12">
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
                  <div className="items-center hidden text-lg uppercase md:flex ">
                    <a
                      href="/about"
                      className="mx-8 text-lg leading-normal text-white hover:underline text-opacity-85 dark:text-gray-800"
                    >
                      About
                    </a>
                    <a
                      href="https://www.medicine2code.com"
                      className="mx-8 text-lg leading-normal text-white hover:underline text-opacity-85 dark:text-gray-800"
                    >
                      Blog
                    </a>
                    <a
                      href="/projects"
                      className="mx-8 text-lg leading-normal text-white hover:underline text-opacity-85 dark:text-gray-800"
                    >
                      Portfolio
                    </a>
                  </div>
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
              className="absolute w-full h-full bg-gray-800 opacity-50"
            ></span>
          </div>

        </section>
        <section className="relative mt-2 bg-gray-200 py-14 dark:bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
              <div className="px-6">
                <div className="flex justify-center">
                  <div className="inline-block">
                    <img
                      alt="author: Tien Phan"
                      src="https://i.imgur.com/vkwYgTw.jpg"
                      className="h-auto -mt-16 align-middle border-none rounded-full shadow-lg lg:-mt-20"
                      style={{ maxWidth: '311px' }}
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="mb-1 text-3xl font-semibold leading-normal text-gray-800">
                    Tien Phan, PharmD
                  </h3>
                  <div className="mt-2 mb-1 text-gray-700">
                    <i className="mr-2 text-lg text-gray-500 far fa-address-book"></i>
                    Full Stack Software Engineer
                  </div>
                  <div className="mt-0 -mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                    <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt"></i>{' '}
                    Northern Virginia/Washington D.C.
                  </div>
                </div>
                <div className="py-10 mt-6 text-center border-t border-gray-300">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Hi! I am a Full Stack Software Engineer with a strong passion for problem solving. My credentials include a doctorate and previous successful Pharmacy career, but something about tech attracted me. Unable to resist the calling, I changed careers and have been rocking along ever since. I love engaging with and helping others learn coding so reach out!   
                      </p>
                      <button className="px-1 py-1 text-white bg-gray-800 border-b-2 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500 dark:text-gray-200 dark:bg-blue-900">
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
