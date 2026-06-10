import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle, FiTruck, FiUsers, FiAward } from 'react-icons/fi'

const highlights = [
  'Fleet from Mini Cargo to 40-Ton Multi-Axle Trailers',
  'Serving Households, Businesses & Industries',
  'Safe, Timely & Cost-Effective Solutions',
  'Professional Team with Deep Logistics Expertise',
  'All Over India Coverage',
  'Real-Time Communication & Tracking',
]

const metrics = [
  { icon: FiTruck, value: '50+', label: 'Vehicles in Fleet' },
  { icon: FiUsers, value: '1000+', label: 'Happy Customers' },
  { icon: FiAward, value: '5+', label: 'Years Experience' },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image + Metrics */}
          <FadeUp delay={0}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/fleet/al-1616.jpg"
                  alt="Pick & Drop Logistics Fleet"
                  className="w-full h-80 object-contain bg-gray-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-bold text-lg">Pick &amp; Drop Logistics</span>
                  <p className="text-blue-100 text-sm">Professional Fleet • All Over India</p>
                </div>
              </div>

              {/* Floating metrics card */}
              <div className="absolute -bottom-8 -right-4 bg-white rounded-2xl shadow-xl p-4 flex gap-6 border border-gray-100">
                {metrics.map(m => (
                  <div key={m.label} className="text-center">
                    <m.icon className="text-primary mx-auto mb-1" size={20} />
                    <div className="text-xl font-extrabold text-primary">{m.value}</div>
                    <div className="text-xs text-gray-500 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Accent stripe */}
              <div className="absolute top-4 -left-4 w-2 h-24 bg-accent rounded-full" />
            </div>
          </FadeUp>

          {/* Right: Content */}
          <FadeUp delay={0.15}>
            <div>
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="section-title mt-2 mb-5">
                About{' '}
                <span className="text-primary">Pick &amp; Drop Logistics</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                Pick &amp; Drop Logistics is a trusted transportation and relocation company providing professional logistics services across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                With a fleet ranging from mini cargo vehicles to heavy-duty trucks and trailers, we serve households, businesses, industries, and agricultural sectors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                We are committed to delivering safe, timely, and cost-effective transportation solutions while maintaining the highest standards of customer satisfaction.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-secondary shrink-0 mt-0.5" size={16} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Get Free Quote
                </a>
                <a href="#fleet" className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                  View Our Fleet
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
