import { DarkModeToggle } from 'tailwind-darkmode-toggle';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {"{ Medicine 2 Code }"} 
      </h1>
      <div className="flex">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        How I Went From{' '}
        <a
          href="https://linkedin.com/in/tien-phan-dc"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Pharmacy
        </a>{' '}
        to{' '}
        <a
          href="https://github.com/tienphandev"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Coding
        </a>
      </h4>
      <DarkModeToggle className='w-10 text-gray-700 dark:text-yellow-300 ml-2' />
      </div>
    </section>
  )
}
