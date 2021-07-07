import SimpleHeader from '../components/simpleHeader';

export default function Projects() {
  return (
    <>
      <SimpleHeader />
      <section className="bg-white py-8">
          <div className="flex justify-center">
            <h1 className="text-3xl">Portfolio</h1>
            <h4 className="text-3xl">(Updates coming soon!)</h4>
          </div>
        <div className="w-5/6 max-w-lg ml-auto mr-auto mt-8 mb-8">
          <div className="flex flex-wrap -mx-6 -my-6">
            <div className="w-full sm:w-1/2 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="21 8 21 21 3 21 3 8" />
                  <rect x="1" y="3" width="22" height="5" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter leading-none mb-3">
                HealthChecker
              </h3>
              <p className="text-lg sm:text-xl leading-normal text-gray-700 mb-8">
                Built with React & Rails
              </p>
              <a
                className="text-md uppercase hover:underline leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="https://github.com/TienPhanDev/HealthCheck"
              >
                Link to demo and repo
              </a>
            </div>
            <div className="w-full sm:w-1/2 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter leading-none mb-3">
                ML Modeling
              </h3>
              <p className="text-lg sm:text-xl leading-normal text-gray-700 mb-8">
                Built with React & Python
              </p>
              <a
                className="text-lg uppercase hover:underline leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="https://machine-learning-modeling.vercel.app/"
              >
                Link to demo and repo
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="w-5/6 max-w-2xl ml-auto mr-auto mt-8 mb-8">
          <div className="flex flex-wrap -mx-6 -my-6">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="21 8 21 21 3 21 3 8" />
                  <rect x="1" y="3" width="22" height="5" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold tracking-tighter leading-none mb-3">
                e.Create
              </h3>
              <p className="text-lg leading-normal text-gray-700 mb-8">
                Built with React & Rails
              </p>
              <a
                className="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="/"
              >
                View demo
              </a>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold tracking-tighter leading-none mb-3">
                Game Mania
              </h3>
              <p className="text-lg leading-normal text-gray-700 mb-8">
                Vanilla JS Hobby Site
              </p>
              <a
                className="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="/"
              >
                view demo
              </a>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-purple-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold tracking-tighter leading-none mb-3">
                Ambulance Racer
              </h3>
              <p className="text-lg leading-normal text-gray-700 mb-8">
                Ruby on Rails webapp
              </p>
              <a
                className="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="/"
              >
                view demo
              </a>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-6 py-6">
              <div className="mb-8">
                <svg
                  className="align-middle text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
              </div>
              <h3 className="text-3xl font-semibold tracking-tighter leading-none mb-3">
                Hot Eats App
              </h3>
              <p className="text-lg leading-normal text-gray-700 mb-8">
                Consumes Yelp API
              </p>
              <a
                className="text-lg leading-normal text-blue-500 hover:text-blue-600 no-underline"
                href="/"
              >
                view demo
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-5/6 max-w-md ml-auto mr-auto pt-8 mt-8 mb-8">
        <div className="text-gray-800 antialiased"></div>
        <div className="flex flex-wrap -mx-6 -my-6">
          <div className="w-full sm:w-1/2 px-6 py-6">
            <h3 className="text-xl font-semibold leading-tight mb-3 text-black text-opacity-50 dark:text-white">
              Title
            </h3>
            <p className="text-lg leading-normal text-gray-700 mb-8 text-opacity-50 dark:text-white">
              content
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-6 py-6">
            <h3 className="text-xl font-semibold leading-tight mb-3 text-black text-opacity-50 dark:text-white">
              Title
            </h3>
            <p className="text-lg leading-normal mb-8 text-black text-opacity-50 dark:text-white">
              content
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-6 py-6 text-black text-opacity-50 dark:text-white">
            <h3 className="text-xl font-semibold leading-tight mb-3 text-black text-opacity-50 dark:text-white">
              Title
            </h3>
            <p className="text-lg leading-normal text-gray-700 mb-8 text-opacity-50 dark:text-white">
              content
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-6 py-6 text-black text-opacity-50 dark:text-white">
            <h3 className="text-xl font-semibold leading-tight mb-3 text-black text-opacity-50 dark:text-white">
              Title
            </h3>
            <p className="text-lg leading-normal text-gray-700 mb-8 text-opacity-50 dark:text-white">
              content
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200 py-8 hover:underline dark:bg-gray-800">
        <div className="flex flex-col-reverse text-md md:flex-row md:items-center md:justify-center px-8 text-gray-800 dark:text-gray-100 hover:underline ">
          <a href="https://www.github.com/tienphandev">
            All Rights Reserved &copy; Tien Phan 2021
          </a>
        </div>
      </footer>
    </>
  );
}
