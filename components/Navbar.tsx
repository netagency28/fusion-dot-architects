"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" }
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
        ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"} 
        text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold tracking-wide">
          <span className="font-bold">Fusion Dot Architects</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link href={item.path} className="hover:opacity-80">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          href="/contact"
          className="bg-white text-black px-4 py-1 text-sm font-medium rounded shadow hover:bg-gray-200 transition"
        >
          Contact us
        </Link>
      </div>
    </motion.nav>
  );
}

export { Navbar };
