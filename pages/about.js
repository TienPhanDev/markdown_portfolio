import Toggle from '../components/themeToggle';

export default function About() {
  return (
    <>
      <div className="profile-page">
        <section className="relative block" style={{ height: '500px' }}>
          <div className="flex relative h-24 dark:bg-gray-800 dark:hover:text-gray-300 dark:text-gray-700">
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
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85"
                    >
                      About
                    </a>
                    <a
                      href="https://www.medicine2code.com"
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85"
                    >
                      Blog
                    </a>
                    <a
                      href="/projects"
                      className="hover:underline mx-8 text-lg leading-normal text-white text-opacity-85"
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
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-14 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex justify-center">
                  <div className="inline-block">
                    <img
                      alt="Tien Phan"
                      src="https://i.imgur.com/vkwYgTw.jpg"
                      className="shadow-lg rounded-full h-auto align-middle border-none -mt-16 lg:-mt-20"
                      style={{ maxWidth: '300px' }}
                    />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    Tien Phan
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                    Northern Virginia/Washington D.C.
                  </div>
                  <div className="mb-2 text-gray-700 mt-8">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Full Stack Software Engineer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    Howard University 2015
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Hi! I am an energetic, motivated, and detailed Full Stack Software
                        Engineer with strong passion to problem solve.
                        Multi-faceted Doctorate education, professional
                        supervision, documentation, strategic planning and
                        execution. Highly articulate, demonstrating excellent
                        interpersonal and management skills, coupled with
                        methodical aptitude. Former Pharmacist.
                      </p>
                      <a
                        href="https://www.linkedin.com/in/tien-phan-dc/"
                        className="hover:underline text-success"
                      >
                        click to Read More 
                      </a>
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
