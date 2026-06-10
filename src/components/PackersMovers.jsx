import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { FaBoxOpen, FaTruckMoving, FaWarehouse, FaHandshake } from 'react-icons/fa'

const steps = [
  { icon: FaBoxOpen, label: 'Professional Packing', color: 'bg-blue-500' },
  { icon: FaTruckMoving, label: 'Safe Loading', color: 'bg-secondary' },
  { icon: FaTruckMoving, label: 'Secure Transport', color: 'bg-accent' },
  { icon: FaWarehouse, label: 'Careful Unloading', color: 'bg-primary' },
]

const benefits = [
  'Professional Packing Materials',
  'Furniture Protection',
  'Door-to-Door Service',
  'Interstate Relocation',
  'Safe Transportation',
  'Dedicated Moving Experts',
]

const movingTypes = [
  { label: 'House Shifting', icon: '🏠' },
  { label: 'Office Relocation', icon: '🏢' },
  { label: 'Warehouse Move', icon: '🏭' },
  { label: 'Interstate Move', icon: '🛣️' },
]

export default function PackersMovers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="packers" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Relocation Experts</span>
          <h2 className="section-title mt-2">
            Professional{' '}
            <span className="text-primary">Packers &amp; Movers</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Stress-free relocation handled by professionals — from packing to unpacking at your new destination
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="text-center relative"
            >
              <div className={`${s.color} rounded-2xl w-16 h-16 mx-auto flex items-center justify-center mb-3 shadow-lg`}>
                <s.icon size={28} className="text-white" />
              </div>
              <p className="font-semibold text-dark text-sm">{s.label}</p>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-0.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-40 bg-gray-100">
                  <img
                    src="/images/fleet/tata-ace.jpg"
                    alt="Packing service"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-56 bg-gray-100">
                  <img
                    src="/images/fleet/al-dost.jpg"
                    alt="Moving truck"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="rounded-2xl overflow-hidden h-56 bg-gray-100">
                  <img
                    src="/images/fleet/mahindra-jeeto.jpg"
                    alt="House shifting"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-40 bg-gray-100">
                  <img
                    src="/images/fleet/eicher-medium.jpg"
                    alt="Office relocation"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Moving types badges */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 flex gap-3 border border-gray-100 whitespace-nowrap">
              {movingTypes.map(t => (
                <span key={t.label} className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                  {t.icon} {t.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 lg:mt-0"
          >
            <h3 className="text-2xl font-bold text-dark mb-2">
              Stress-Free Relocation{' '}
              <span className="text-primary">Handled By Professionals</span>
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our trained packing and moving experts handle every aspect of your relocation — ensuring your belongings arrive safely, on time, and stress-free.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                  <FiCheckCircle className="text-secondary shrink-0" size={16} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Highlight card */}
            <div className="bg-light border border-gray-100 rounded-2xl p-5 mb-7">
              <FaHandshake className="text-primary mb-2" size={24} />
              <p className="font-semibold text-dark text-sm">
                Over 500 successful house and office relocations across South India and pan-India routes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Book Packers &amp; Movers <FiArrowRight />
              </a>
              <a
                href="https://wa.me/919600101149?text=I need packers and movers service"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary font-semibold px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
