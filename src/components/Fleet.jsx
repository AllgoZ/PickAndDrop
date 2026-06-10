import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiTruck } from 'react-icons/fi'

const categories = ['All', 'Small', 'Medium', 'Heavy', 'Large Trucks', 'Trailers']

const vehicles = [
  // SMALL
  {
    id: 1, category: 'Small',
    name: 'Tata Ace',
    subtitle: 'Chota Hathi',
    capacity: '0.75 Ton',
    image: '/images/fleet/tata-ace.jpg',
    badge: 'Small',
    badgeColor: 'bg-green-100 text-green-700',
    useCases: ['Local delivery', 'Urban logistics', 'Small goods'],
  },
  {
    id: 2, category: 'Small',
    name: 'Mahindra Jeeto',
    subtitle: 'Mini Cargo',
    capacity: '0.7 Ton',
    image: '/images/fleet/mahindra-jeeto.jpg',
    badge: 'Small',
    badgeColor: 'bg-green-100 text-green-700',
    useCases: ['City delivery', 'E-commerce', 'Courier'],
  },
  {
    id: 3, category: 'Small',
    name: 'Ashok Leyland Dost',
    subtitle: 'Light Cargo',
    capacity: '1.25 Ton',
    image: '/images/fleet/al-dost.jpg',
    badge: 'Small',
    badgeColor: 'bg-green-100 text-green-700',
    useCases: ['Local transport', 'Retail goods', 'House shifting'],
  },

  // MEDIUM
  {
    id: 4, category: 'Medium',
    name: 'Tata 407',
    subtitle: 'Medium Cargo',
    capacity: '2.5 Ton',
    image: '/images/fleet/eicher-medium.jpg',
    badge: 'Medium',
    badgeColor: 'bg-blue-100 text-blue-700',
    useCases: ['Intercity delivery', 'Office shifting', 'Retail freight'],
  },
  {
    id: 5, category: 'Medium',
    name: 'Eicher Pro 2049',
    subtitle: 'Medium Truck',
    capacity: '3 Ton',
    image: '/images/fleet/eicher-2049.jpg',
    badge: 'Medium',
    badgeColor: 'bg-blue-100 text-blue-700',
    useCases: ['State transport', 'Industrial goods', 'Commercial freight'],
  },
  {
    id: 6, category: 'Medium',
    name: 'BharatBenz 1015',
    subtitle: 'Medium Cargo',
    capacity: '5 Ton',
    image: '/images/fleet/al-dost-side.jpg',
    badge: 'Medium',
    badgeColor: 'bg-blue-100 text-blue-700',
    useCases: ['Heavy retail', 'Construction materials', 'Bulk delivery'],
  },

  // HEAVY
  {
    id: 7, category: 'Heavy',
    name: 'Eicher Pro 3015',
    subtitle: 'Heavy Duty',
    capacity: '10 Ton',
    image: '/images/fleet/eicher-3015-box.jpg',
    badge: 'Heavy',
    badgeColor: 'bg-orange-100 text-orange-700',
    useCases: ['Industrial logistics', 'Warehouse freight', 'Cross-state transport'],
  },
  {
    id: 8, category: 'Heavy',
    name: 'Ashok Leyland 1616',
    subtitle: 'Heavy Cargo',
    capacity: '16 Ton',
    image: '/images/fleet/al-1616.jpg',
    badge: 'Heavy',
    badgeColor: 'bg-orange-100 text-orange-700',
    useCases: ['Industrial transport', 'Steel & iron', 'Pan-India freight'],
  },
  {
    id: 9, category: 'Heavy',
    name: 'BharatBenz 1617R',
    subtitle: 'Heavy Truck',
    capacity: '16 Ton',
    image: '/images/fleet/eicher-3015.jpg',
    badge: 'Heavy',
    badgeColor: 'bg-orange-100 text-orange-700',
    useCases: ['Containerised freight', 'Machinery transport', 'Cold chain'],
  },

  // LARGE TRUCKS
  {
    id: 10, category: 'Large Trucks',
    name: 'Ashok Leyland 2820',
    subtitle: 'Large Truck',
    capacity: '20 Ton',
    image: '/images/fleet/al-2820.jpg',
    badge: 'Large',
    badgeColor: 'bg-red-100 text-red-700',
    useCases: ['Heavy industrial', 'Long haul freight', 'Agricultural bulk'],
  },
  {
    id: 11, category: 'Large Trucks',
    name: 'BharatBenz 2823C',
    subtitle: 'Large Cargo',
    capacity: '25 Ton',
    image: '/images/fleet/benz-2823.jpg',
    badge: 'Large',
    badgeColor: 'bg-red-100 text-red-700',
    useCases: ['Mining equipment', 'Heavy construction', 'Interstate bulk'],
  },
  {
    id: 12, category: 'Large Trucks',
    name: 'Tata Signa 3523.T',
    subtitle: 'Super Heavy',
    capacity: '35 Ton',
    image: '/images/fleet/eicher-heavy.jpg',
    badge: 'Large',
    badgeColor: 'bg-red-100 text-red-700',
    useCases: ['ODC cargo', 'Heavy machinery', 'Project cargo'],
  },

  // TRAILERS
  {
    id: 13, category: 'Trailers',
    name: '32 Feet Trailer',
    subtitle: 'Semi-Trailer',
    capacity: 'Up to 25 Ton',
    image: '/images/fleet/al-medium.jpg',
    badge: 'Trailer',
    badgeColor: 'bg-purple-100 text-purple-700',
    useCases: ['FMCG freight', 'Consumer goods', 'Long haul'],
  },
  {
    id: 14, category: 'Trailers',
    name: '40 Feet Trailer',
    subtitle: 'Full Trailer',
    capacity: 'Up to 35 Ton',
    image: '/images/fleet/eicher-small.jpg',
    badge: 'Trailer',
    badgeColor: 'bg-purple-100 text-purple-700',
    useCases: ['Containerised cargo', 'Export-import', 'Pan-India logistics'],
  },
  {
    id: 15, category: 'Trailers',
    name: 'Multi Axle Trailer',
    subtitle: 'Heavy Hauler',
    capacity: 'Up to 40 Ton',
    image: '/images/fleet/al-2820.jpg',
    badge: 'Trailer',
    badgeColor: 'bg-purple-100 text-purple-700',
    useCases: ['ODC / ODL cargo', 'Heavy equipment', 'Transformers & boilers'],
  },
]

function VehicleCard({ v, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card overflow-hidden group"
    >
      {/* Vehicle Image */}
      <div className="relative h-48 bg-gray-50 overflow-hidden flex items-center justify-center p-4">
        <img
          src={v.image}
          alt={v.name}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {/* Capacity badge */}
        <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
          {v.capacity}
        </div>
        {/* Category badge */}
        <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg ${v.badgeColor}`}>
          {v.badge}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-dark text-base">{v.name}</h3>
        <p className="text-gray-400 text-xs mb-3">{v.subtitle}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {v.useCases.map(u => (
            <span key={u} className="text-[11px] bg-light text-gray-600 px-2 py-0.5 rounded-md border border-gray-100">
              {u}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="block text-center bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary-dark transition"
        >
          Book This Vehicle
        </a>
      </div>
    </motion.div>
  )
}

export default function Fleet() {
  const [active, setActive] = useState('All')
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  const filtered = active === 'All' ? vehicles : vehicles.filter(v => v.category === active)

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Our Fleet</span>
          <h2 className="section-title mt-2">
            Vehicles for{' '}
            <span className="text-primary">Every Requirement</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From 0.7-ton mini cargo to 40-ton multi-axle trailers — we have the right vehicle for your cargo
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="fleet-tabs flex gap-2 overflow-x-auto pb-2 mb-8 justify-start lg:justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                active === cat
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((v, i) => (
              <VehicleCard key={v.id} v={v} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-5 shadow-lg border border-gray-100">
            <FiTruck size={28} className="text-primary" />
            <div className="text-left">
              <p className="font-bold text-dark">Need a specific vehicle?</p>
              <p className="text-gray-500 text-sm">We'll find the perfect fit for your cargo size and route.</p>
            </div>
            <a href="#contact" className="btn-primary ml-4 whitespace-nowrap">
              Get Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
