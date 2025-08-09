import Link from "next/link"
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa"
import { TbArrowBigUpLines } from "react-icons/tb"
import { PiBuildingsFill } from "react-icons/pi" // Custom logo icon

function Footer() {
  return (
    <footer className="bg-white border-t text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 py-12 border-b">
        {/* Left: Contact Info */}
        <div className="space-y-4 text-sm">
          <p className="font-medium underline underline-offset-4">hello@minnaro.com</p>
          <p className="border-b border-gray-400 inline-block pb-1">+1 2030 4050 10</p>
          <div className="text-gray-600">
            <p>New York,</p>
            <p>Seventh Ave, 20th Floor, NY 10018</p>
          </div>
          <Link href="/contact" className="inline-flex items-center font-semibold underline underline-offset-4 hover:opacity-80 transition">
            Contact us <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex flex-col items-center justify-center">
          <PiBuildingsFill className="text-4xl mb-2" />
          <p className="font-medium text-xl">Fusion Dot Architects</p>
          {/* <p className="text-sm text-gray-500">architects</p> */}
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 gap-y-3 text-sm text-right md:text-left">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/people">People</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/career">Career</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/our-process">Our Process</Link>
          <Link href="/media-awards">Media & Awards</Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 text-sm text-gray-500">
        <div className="mb-4 md:mb-0">&copy; 2009 - 2025 Vamtam. <Link href="/terms" className="underline ml-2">Terms</Link></div>

        <div className="flex items-center gap-6 text-black text-lg">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></Link>
          <Link href="https://houzz.com" target="_blank" aria-label="Houzz"><PiBuildingsFill /></Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></Link>
          <Link href="https://pinterest.com" target="_blank" aria-label="Pinterest"><FaPinterestP /></Link>
        </div>

        <Link href="#" className="ml-auto mt-4 md:mt-0 text-xl hover:opacity-70 transition" aria-label="Scroll to top">
          <TbArrowBigUpLines />
        </Link>
      </div>
    </footer>
  )
}


export { Footer }