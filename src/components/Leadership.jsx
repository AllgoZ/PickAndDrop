import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiLinkedin, FiPhone } from 'react-icons/fi'

const leaders = [
  {
    name: 'Sarankumar Ponraj',
    role: 'Co-Founder & Managing Director',
    company: 'Pick & Drop Logistics',
    phone: '9524531398',
    initials: 'SP',
    color: 'from-primary to-blue-500',
    bgLight: 'bg-blue-50',
    description:
      'Leading business development, customer relationships, strategic planning, and company growth. Sarankumar brings a strong vision for building a pan-India logistics network.',
    expertise: ['Business Development', 'Customer Relations', 'Strategic Planning', 'Company Growth'],
  },
  {
    name: 'Gowtham Nachimuthu D',
    role: 'Co-Founder & Operations Director',
    company: 'Pick & Drop Logistics',
    phone: '9600412704',
    initials: 'GN',
    color: 'from-secondary to-emerald-400',
    bgLight: 'bg-emerald-50',
    description:
      'Managing operations, fleet coordination, transportation planning, and service quality. Gowtham ensures every delivery is executed with precision, safety, and timeliness.',
    expertise: ['Fleet Management', 'Operations', 'Transport Planning', 'Service Quality'],
  },
]

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Our Founders</span>
          <h2 className="section-title mt-2">
            Leadership &amp;{' '}
            <span className="text-primary">Founders</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Driven by passion for logistics, our founders bring expertise and dedication to every delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card overflow-hidden"
            >
              {/* Top gradient */}
              <div className={`bg-gradient-to-br ${leader.color} h-32 relative`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              {/* Avatar */}
              <div className="px-6 -mt-10 relative">
                <div
                  className={`bg-gradient-to-br ${leader.color} text-white text-2xl font-extrabold w-20 h-20 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                >
                  {leader.initials}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-3">
                <h3 className="text-xl font-bold text-dark">{leader.name}</h3>
                <p className="text-secondary font-semibold text-sm mt-0.5">{leader.role}</p>
                <p className="text-gray-400 text-xs mb-4">{leader.company}</p>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">{leader.description}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {leader.expertise.map(e => (
                    <span
                      key={e}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${leader.bgLight} text-gray-700`}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                {/* Contact */}
                <a
                  href={`tel:${leader.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition"
                >
                  <FiPhone size={15} /> {leader.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
