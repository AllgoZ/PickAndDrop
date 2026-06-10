import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiClock, FiUsers, FiShield, FiDollarSign, FiMessageSquare, FiTruck } from 'react-icons/fi'

const features = [
  {
    icon: FiClock,
    title: 'Reliable Service',
    desc: 'On-time deliveries with complete transparency at every step of the journey.',
    color: 'text-primary',
    bg: 'bg-blue-50',
  },
  {
    icon: FiUsers,
    title: 'Professional Team',
    desc: 'Experienced logistics professionals dedicated to excellence and customer satisfaction.',
    color: 'text-secondary',
    bg: 'bg-emerald-50',
  },
  {
    icon: FiShield,
    title: 'Safe Handling',
    desc: 'Careful packing and transportation to ensure your goods arrive in perfect condition.',
    color: 'text-primary',
    bg: 'bg-blue-50',
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Pricing',
    desc: 'Competitive and transparent pricing offering the best value for your money.',
    color: 'text-accent',
    bg: 'bg-yellow-50',
  },
  {
    icon: FiMessageSquare,
    title: 'Real-Time Communication',
    desc: 'Continuous updates and proactive communication throughout your shipment journey.',
    color: 'text-secondary',
    bg: 'bg-emerald-50',
  },
  {
    icon: FiTruck,
    title: 'Wide Fleet Network',
    desc: 'Vehicles ranging from 0.7-ton mini trucks to 40-ton multi-axle trailers for every need.',
    color: 'text-primary',
    bg: 'bg-blue-50',
  },
]

function FeatureCard({ feat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card p-6 group cursor-default"
    >
      <div className={`${feat.bg} rounded-2xl w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <feat.icon size={26} className={feat.color} />
      </div>
      <h3 className="font-bold text-dark text-lg mb-2">{feat.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Our Strengths</span>
          <h2 className="section-title mt-2">
            Why Choose{' '}
            <span className="text-primary">Pick &amp; Drop?</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trusted by thousands across India for our commitment to quality, safety, and reliability
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feat={f} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl p-8 sm:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #0B4F6C 0%, #2E8B57 100%)' }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Ship? Get a Free Quote Today!
          </h3>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            Contact us now for competitive rates and professional logistics service across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-accent text-dark font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 transition transform hover:scale-105">
              Request Quote
            </a>
            <a href="tel:9600101149" className="border-2 border-white/60 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition">
              Call: 9600101149
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
