import Image from 'next/image'
import Link from 'next/link'
import Logo from "./dojo-logo.png"

function Navbar() {
  return (
    <nav>
        <Image src={Logo} alt="dojo-image" width={70} quality={100} placeholder="blur" />
    <h1> dojo helpdesk</h1>
   <Link href="/">dashboard</Link>
   <Link href="/tickets">tickets</Link>
   </nav>
  )
}

export default Navbar