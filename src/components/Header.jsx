import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Packers & Movers', href: '#packers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/logo.jpeg"
              alt="Pick & Drop Logistics"
              className="h-9 lg:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                  scrolled ? 'text-dark' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9600101149"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <FiPhone className="shrink-0" />
              9600101149
            </a>
            <a
              href="#contact"
              className="bg-accent text-dark text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden p-2 rounded-md"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={24} className={scrolled ? 'text-dark' : 'text-white'} />
            ) : (
              <FiMenu size={24} className={scrolled ? 'text-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-dark hover:bg-light hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-2 space-y-2">
                <a
                  href="tel:9600101149"
                  className="flex items-center gap-2 text-primary font-semibold py-2 px-3"
                >
                  <FiPhone /> 9600101149
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-primary text-white text-center font-bold py-3 rounded-lg hover:bg-primary-dark transition"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
