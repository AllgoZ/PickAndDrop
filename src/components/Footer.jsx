import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Packers & Movers', href: '#packers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Local Transportation',
  'Intercity Transport',
  'House Shifting',
  'Office Relocation',
  'Industrial Logistics',
  'Agricultural Transport',
  'Dedicated Vehicle Hire',
  'Interstate Relocation',
]

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/919600101149',
    color: 'hover:bg-green-500',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/pick_nd_drop_logistics',
    color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500',
  },
  {
    icon: FaFacebook,
    label: 'Facebook',
    href: '#',
    color: 'hover:bg-blue-600',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:pndlogistics2025@gmail.com',
    color: 'hover:bg-primary',
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* <img
              src="/images/logo.jpeg"
              alt="Pick & Drop Logistics"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            /> */}
            <h3 className="font-bold text-white text-lg leading-tight mb-1">Pick &amp; Drop Logistics</h3>
            <p className="text-accent text-sm font-semibold mb-4 italic">
              Fast. Safe. Reliable. Every Mile.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional transportation and logistics services across India. Trusted by households, businesses, and industries.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`bg-white/10 ${s.color} text-white w-9 h-9 rounded-lg flex items-center justify-center transition-colors`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    → {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                    → {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9600101149" className="flex items-start gap-3 text-gray-400 hover:text-accent transition">
                  <FiPhone className="shrink-0 mt-0.5 text-accent" size={15} />
                  <span className="text-sm">9600101149</span>
                </a>
              </li>
              <li>
                <a href="tel:9524531398" className="flex items-start gap-3 text-gray-400 hover:text-accent transition">
                  <FiPhone className="shrink-0 mt-0.5 text-accent" size={15} />
                  <span className="text-sm">9524531398 (Sarankumar)</span>
                </a>
              </li>
              <li>
                <a href="tel:9600412704" className="flex items-start gap-3 text-gray-400 hover:text-accent transition">
                  <FiPhone className="shrink-0 mt-0.5 text-accent" size={15} />
                  <span className="text-sm">9600412704 (Gowtham)</span>
                </a>
              </li>
              <li>
                <a href="mailto:pndlogistics2025@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-accent transition">
                  <FiMail className="shrink-0 mt-0.5 text-accent" size={15} />
                  <span className="text-sm break-all">pndlogistics2025@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <FiMapPin className="shrink-0 mt-0.5 text-accent" size={15} />
                  <span className="text-sm">1/8, Ayyappa Nagar, Kalapatti Main Road, Coimbatore – 641048, Tamil Nadu</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © 2026 Pick &amp; Drop Logistics. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Serving India — Fast. Safe. Reliable. Every Mile.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919600101149?text=Hi! I need a logistics quote."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </footer>
  )
}
