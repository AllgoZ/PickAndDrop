import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const stats = [
  { number: '5000+', label: 'Successful Deliveries' },
  { number: '1000+', label: 'Happy Customers' },
  { number: '100+', label: 'Business Clients' },
  { number: '24/7', label: 'Support' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B4F6C 0%, #0d6080 40%, #1a3a5c 100%)',
      }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Green accent circle */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-secondary opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-accent opacity-10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] lg:min-h-0">

          {/* ---- Left Content ---- */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-accent text-sm font-semibold px-4 py-2 rounded-full mb-5 border border-white/20"
            >
              🚛 All Over India — Fast. Safe. Reliable. Every Mile.
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            >
              Your Trusted{' '}
              <span className="text-accent">Logistics Partner</span>{' '}
              Across India
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl"
            >
              From local deliveries to interstate transportation, house shifting, industrial logistics, and commercial freight solutions, Pick &amp; Drop Logistics delivers with safety, speed, and reliability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 bg-accent text-dark font-bold px-7 py-3.5 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg text-base"
              >
                Get Free Quote <FiArrowRight />
              </a>
              <a
                href="tel:9600101149"
                className="flex items-center gap-2 border-2 border-white/60 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all text-base"
              >
                <FiPhone /> Call Now
              </a>
              <a
                href="https://wa.me/919600101149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-green-600 transition-all text-base"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/15 transition"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent leading-none">{s.number}</div>
                  <div className="text-blue-100 text-xs mt-1.5 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ---- Right: Truck Image ---- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-2xl scale-95" />
              <motion.img
                src="/images/fleet/al-2820.jpg"
                alt="Pick & Drop Logistics Heavy Truck"
                className="relative w-full max-w-xl mx-auto rounded-2xl shadow-2xl object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* All Over India badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, type: 'spring' }}
                className="absolute -top-5 -right-5 bg-secondary text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl border-4 border-white/30"
              >
                <span className="text-[10px] font-bold tracking-wider">ALL OVER</span>
                <span className="text-lg font-extrabold leading-none">INDIA</span>
              </motion.div>
              {/* Fleet size badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, type: 'spring' }}
                className="absolute -bottom-4 -left-4 bg-accent text-dark rounded-xl px-4 py-2 shadow-xl border border-white/20"
              >
                <div className="text-xs font-semibold">Fleet Range</div>
                <div className="text-sm font-bold">0.7T – 40T Capacity</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full">
          <path d="M0,56L48,50.7C96,45,192,35,288,34.7C384,35,480,45,576,48C672,51,768,47,864,42.7C960,39,1056,35,1152,34.7C1248,35,1344,39,1392,41.3L1440,44L1440,70L1392,70C1344,70,1248,70,1152,70C1056,70,960,70,864,70C768,70,672,70,576,70C480,70,384,70,288,70C192,70,96,70,48,70L0,70Z" />
        </svg>
      </div>
    </section>
  )
}
