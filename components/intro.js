export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        {"{ Medicine 2 Code }"} 
      </h1>
      <div className="flex">
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        How I Went From{' '}
        <a
          href="https://linkedin.com/in/tien-phan-dc"
          className="underline transition-colors duration-200 hover:text-success"
        >
          Pharmacy
        </a>{' '}
        to{' '}
        <a
          href="https://github.com/tienphandev"
          className="underline transition-colors duration-200 hover:text-success"
        >
          Coding
        </a>
      </h4>
      </div>
    </section>
  )
}
