import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'

const cities = [
  { name: 'Coimbatore', tag: 'Headquarters', highlight: true },
  { name: 'Chennai', tag: 'Metro Hub' },
  { name: 'Bangalore', tag: 'Tech City' },
  { name: 'Salem', tag: 'Central TN' },
  { name: 'Erode', tag: 'Textile Hub' },
  { name: 'Tiruppur', tag: 'Knitwear City' },
  { name: 'Madurai', tag: 'South TN' },
  { name: 'Trichy', tag: 'Central Hub' },
  { name: 'Dindigul', tag: 'South TN' },
  { name: 'Hosur', tag: 'Industrial City' },
]

function CityCard({ city, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
      className={`card p-5 text-center cursor-default ${
        city.highlight
          ? 'border-2 border-primary bg-primary/5'
          : 'border border-gray-100'
      }`}
    >
      <div className={`rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 ${
        city.highlight ? 'bg-primary' : 'bg-light'
      }`}>
        <FiMapPin size={20} className={city.highlight ? 'text-white' : 'text-primary'} />
      </div>
      <h3 className="font-bold text-dark text-base">{city.name}</h3>
      <p className={`text-xs mt-1 font-medium ${city.highlight ? 'text-primary' : 'text-gray-400'}`}>
        {city.tag}
      </p>
      {city.highlight && (
        <span className="inline-block mt-2 text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">
          HQ
        </span>
      )}
    </motion.div>
  )
}

export default function ServiceAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="areas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Coverage</span>
          <h2 className="section-title mt-2">
            Serving Major Cities Across{' '}
            <span className="text-primary">South India</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Nationwide transportation solutions with deep roots in South India — headquartered in Coimbatore
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {cities.map((c, i) => (
            <CityCard key={c.name} city={c} index={i} />
          ))}
        </div>

        {/* Nationwide banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 text-center border-2 border-dashed border-primary/30 bg-primary/5"
        >
          <div className="text-4xl mb-3">🇮🇳</div>
          <h3 className="text-xl font-bold text-dark mb-2">
            Pan-India Transportation Network
          </h3>
          <p className="text-gray-500 max-w-lg mx-auto text-sm mb-5">
            Beyond South India, we provide nationwide transportation solutions. No matter where your cargo needs to go, Pick &amp; Drop Logistics has you covered.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Check Availability in Your City
          </a>
        </motion.div>
      </div>
    </section>
  )
}
