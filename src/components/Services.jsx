import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTruck, FiPackage, FiZap, FiCheckCircle } from 'react-icons/fi'

const services = [
  {
    icon: FiTruck,
    title: 'Transportation Services',
    color: 'from-primary to-blue-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    items: [
      'Local Transportation',
      'Intercity Transportation',
      'Industrial Logistics',
      'Commercial Freight',
      'Agricultural Goods Transport',
      'Construction Material Transport',
      'Contract Logistics',
      'Dedicated Vehicle Hire',
    ],
  },
  {
    icon: FiPackage,
    title: 'Packers & Movers',
    color: 'from-secondary to-emerald-400',
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    items: [
      'House Shifting',
      'Apartment Relocation',
      'Office Relocation',
      'Warehouse Relocation',
      'Packing & Unpacking',
      'Loading & Unloading',
      'Interstate Relocation',
    ],
  },
  {
    icon: FiZap,
    title: 'Express Delivery',
    color: 'from-accent to-yellow-500',
    lightColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    items: [
      'Same Day Delivery',
      'Scheduled Delivery',
      'Bulk Delivery',
      'Business Logistics Solutions',
    ],
  },
]

function ServiceCard({ svc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className={`bg-gradient-to-br ${svc.color} p-6`}>
        <div className="bg-white/20 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
          <svc.icon size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{svc.title}</h3>
      </div>

      {/* Items */}
      <div className={`flex-1 p-6 ${svc.lightColor} border-t-0`}>
        <ul className="space-y-2.5">
          {svc.items.map(item => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
              <FiCheckCircle className="text-secondary shrink-0" size={15} />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm border-2 ${svc.borderColor} text-gray-700 hover:bg-white transition-colors`}
        >
          Get Quote →
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="section-title mt-2">Our <span className="text-primary">Services</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive logistics solutions from local transport to pan-India freight
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
