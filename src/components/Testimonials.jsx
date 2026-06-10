import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Arun Kumar',
    location: 'Chennai to Bangalore',
    rating: 5,
    review:
      'Shifting from Chennai to Bangalore felt difficult until Pick & Drop Logistics handled everything. Packing, transportation, and delivery were smooth and professional. Highly recommended!',
    avatar: 'AK',
    avatarColor: 'bg-primary',
    type: 'House Shifting',
  },
  {
    id: 2,
    name: 'Aarudhra Agros',
    location: 'Coimbatore',
    rating: 5,
    review:
      'We transport agricultural products regularly through Pick & Drop Logistics. Their service is reliable and always on time. Great coordination and very professional team.',
    avatar: 'AA',
    avatarColor: 'bg-secondary',
    type: 'Agricultural Transport',
  },
  {
    id: 3,
    name: 'Praveen R',
    location: 'Salem',
    rating: 5,
    review:
      'Excellent communication, fair pricing, and safe delivery. Highly recommended for house shifting and transport services. The team was very careful with all our belongings.',
    avatar: 'PR',
    avatarColor: 'bg-accent',
    type: 'House Shifting',
  },
  {
    id: 4,
    name: 'Tech Solutions Pvt Ltd',
    location: 'Bangalore',
    rating: 5,
    review:
      'Our office relocation was completed without any downtime. Very professional team who handled our expensive equipment with utmost care. Will definitely use again.',
    avatar: 'TS',
    avatarColor: 'bg-primary',
    type: 'Office Relocation',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} className="fill-accent text-accent" size={16} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Customer Reviews</span>
          <h2 className="section-title mt-2">
            What Our{' '}
            <span className="text-primary">Clients Say</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trusted by thousands of customers across India for reliable logistics services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="card p-6 h-full flex flex-col"
                >
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-primary/20 mb-4" size={36} />

                  {/* Rating */}
                  <StarRating count={t.rating} />

                  {/* Review */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">
                    "{t.review}"
                  </p>

                  {/* Customer */}
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                    <div
                      className={`${t.avatarColor} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.location}</p>
                    </div>
                    <span className="ml-auto text-xs bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full">
                      {t.type}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-4"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '1000+', label: 'Happy Customers' },
            { value: '5000+', label: 'Successful Deliveries' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
