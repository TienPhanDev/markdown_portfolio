import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="https://linkedin.com/in/tien-phan-dc">
        <a className="hover:underline">Medicine2code</a>
      </Link>
    </h2>
  )
}
