/* eslint-disable jsx-a11y/accessible-emoji */
export default function SimpleFooter() {
  return (
    <footer className="flex w-full h-auto bg-gray-100 absolute bottom-0 dark:bg-gray-800 dark:text-white">
        <div className="mx-auto text-bg-blue-900 text-lg items-center">
          <a
            href="https://www.github.com/tienphandev"
            className="py-2 px-2 flex hover:text-gray-600"
          >
            Made with 💖 in VA. All Rights Reserved Tien Phan © 2021
          </a>
      </div>
    </footer>
  );
}
