import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="https://www.linkedin.com/in/tien-phan-dc"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://www.github.com/tienphandev"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Portfolio
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://www.linkedin.com/in/tien-phan-dc"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="https://www.linkedin.com/in/tien-phan-dc"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a
              href="https://www.linkedin.com/in/tien-phan-dc"
              className="text-gray-400 hover:text-gray-500"
            ><span className="sr-only">LinkedIn</span>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a
              href="https://www.github.com/tienphandev"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>

            <a
              href="https://www.linkedin.com/in/tien-phan-dc"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Email</span>
              <FontAwesomeIcon icon={faGoogle} size="2x"/>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            Tien Phan © 2021 All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
