import Image from "next/image"
import Link from "next/link"

export default function BuildCTASection() {
  return (
    <section className="relative w-full">
      {/* Background Image with Overlay Content */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://minnaro.vamtam.com/wp-content/uploads/2025/05/GettyImages-1401941633.jpg" // Place image in /public/images
          alt="Build CTA Background"
          fill
          className="object-cover"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 py-10 md:px-20 md:py-16 text-white bg-black/30">
          {/* Top Right Image */}
          {/* <div className="flex justify-end">
            <div className="relative w-[240px] md:w-[280px] h-[360px]">
              <Image
                src="https://res.cloudinary.com/dytr7tpmt/image/upload/v1757005989/4_wucrx0.jpg"
                alt="Collin College"
                fill
                className="object-cover"
              />
              <p className="absolute bottom-2 left-2 text-sm font-medium text-white drop-shadow-md">
                Collin College, Technical Campus
              </p>
            </div>
          </div> */}

          {/* Bottom Left Text + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              The best builds start<br />before the build
            </h2>
            <Link
              href="/contact"
              className="mt-6 md:mt-0 px-5 py-2.5 text-sm bg-white text-black font-medium border border-black hover:bg-black hover:text-white transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 px-6 md:px-20 py-12 bg-white text-center text-black">
        {[
          { number: "10+", label: "Year of experience" },
          { number: "200+", label: "Residential Projects Completed" },
          { number: "100+", label: "Commercial Spaces Transformed" },
          { number: "400+", label: "Serving Clients Nationwide" },
        ].map(({ number, label }) => (
          <div key={label}>
            <p className="text-2xl font-semibold">{number}</p>
            <p className="text-sm text-gray-600 mt-1">{label}</p>
          </div>
        ))}
      </div>
      <hr />
    
    </section>
  )
}
