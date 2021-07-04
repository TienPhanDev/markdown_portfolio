/* eslint-disable jsx-a11y/accessible-emoji */
export default function LandingFooter() {
  return (
    <footer className="absolute bottom-0 left-0 right-0">
      <div className="flex justify-between items-center">
        <div className="flex mx-auto text-white dark:text-white text-lg lg:flex items-center bg-gray-900 bg-opacity-60">
          <a
            href="https://www.github.com/tienphandev"
            className="bg-origin-content bg-gray-900 bg-opacity-60 py-2 px-6 my-2 flex hover:text-gray-300"
          >
            Made with 💖 in VA. All Rights Reserved Tien Phan © 2021
          </a>
        </div>
      </div>
    </footer>
  );
}