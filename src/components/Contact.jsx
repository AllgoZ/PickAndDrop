import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

const vehicleOptions = [
  'Tata Ace (0.75 Ton)',
  'Mahindra Jeeto (0.7 Ton)',
  'Ashok Leyland Dost (1.25 Ton)',
  'Tata 407 (2.5 Ton)',
  'Eicher Pro 2049 (3 Ton)',
  'BharatBenz 1015 (5 Ton)',
  'Eicher Pro 3015 (10 Ton)',
  'Ashok Leyland 1616 (16 Ton)',
  'BharatBenz 1617R (16 Ton)',
  'Ashok Leyland 2820 (20 Ton)',
  'BharatBenz 2823C (25 Ton)',
  'Tata Signa 3523.T (35 Ton)',
  '32 Feet Trailer',
  '40 Feet Trailer',
  'Multi Axle Trailer (Up to 40 Ton)',
  'Not Sure / Need Advice',
]

const contactInfo = [
  {
    icon: FiPhone,
    label: 'Call Us',
    value: '9600101149',
    sub: 'Mon – Sun, 6 AM – 10 PM',
    href: 'tel:9600101149',
    color: 'bg-primary',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '9600101149',
    sub: 'Quick response guaranteed',
    href: 'https://wa.me/919600101149',
    color: 'bg-green-500',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'pndlogistics2025@gmail.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:pndlogistics2025@gmail.com',
    color: 'bg-accent',
  },
  {
    icon: FiMapPin,
    label: 'Office',
    value: 'Kalapatti, Coimbatore',
    sub: '1/1, Ayyappa Nagar, Kalapatti Main Road, Coimbatore – 641048',
    href: 'https://maps.google.com/?q=Kalapatti,Coimbatore',
    color: 'bg-secondary',
  },
]

const emptyForm = {
  name: '', phone: '', email: '', pickup: '', drop: '', vehicle: '', message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = [
      `*New Quote Request - Pick & Drop Logistics*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : '',
      `Pickup: ${form.pickup}`,
      `Drop: ${form.drop}`,
      form.vehicle ? `Vehicle: ${form.vehicle}` : '',
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean).join('%0A')

    window.open(`https://wa.me/919600101149?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm(emptyForm) }, 4000)
  }

  const inputClass =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white placeholder-gray-400'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="section-title mt-2">
            Request a{' '}
            <span className="text-primary">Free Quote</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Fill in your details and we'll get back to you within minutes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-4 flex items-start gap-4 hover:border-primary border border-transparent transition group"
              >
                <div className={`${c.color} rounded-xl w-11 h-11 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <c.icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                  <p className="font-bold text-dark text-sm truncate">{c.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{c.sub}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="card p-4">
              <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pick_nd_drop_logistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition"
                >
                  <FaInstagram size={14} /> Instagram
                </a>
                <a
                  href="https://wa.me/919600101149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-dark mb-2">Quote Request Sent!</h3>
                  <p className="text-gray-500 text-sm">
                    Redirected to WhatsApp. Our team will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="Your phone number"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com (optional)"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                        Pickup Location <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        value={form.pickup}
                        onChange={set('pickup')}
                        placeholder="City or address"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
                        Drop Location <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        value={form.drop}
                        onChange={set('drop')}
                        placeholder="City or address"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Vehicle Requirement</label>
                    <select value={form.vehicle} onChange={set('vehicle')} className={inputClass}>
                      <option value="">Select vehicle type</option>
                      {vehicleOptions.map(v => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Message / Additional Details</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Describe your cargo, special requirements, etc."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition shadow-md"
                    >
                      <FiSend size={16} /> Request Quote via WhatsApp
                    </motion.button>
                    <a
                      href="tel:9600101149"
                      className="flex items-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition"
                    >
                      <FiPhone size={16} /> Call Now
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
