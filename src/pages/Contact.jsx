import { Link } from 'react-router-dom';

const contactMethods = [
  {
    label: 'Visit Our Studio',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    details: ['3000 184th St SW', 'Ste 366', 'Lynnwood, WA 98037'],
  },
  {
    label: 'Call Us',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    details: ['(509) 986-3222', 'Toll-Free: (800) 555-0199'],
  },
  {
    label: 'Email Us',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    details: ['info@eternitawashington.com', 'info@eternitawashington.com'],
  },
  {
    label: 'Hours of Operation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    details: ['Mon–Fri: 9:00 AM – 7:00 PM', 'Saturday: 9:00 AM – 5:00 PM', 'Sunday: 10:00 AM – 3:00 PM'],
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-eternita-teal-dark via-eternita-teal to-eternita-teal-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-eternita-coral-light">Contact</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-eternita-white mt-3 mb-4">
            Let's Begin Your<br />Wellness Journey
          </h1>
          <p className="text-eternita-white/70 max-w-2xl mx-auto text-sm md:text-lg">
            Ready to experience Eternita? Reach out to our team and take the first step toward a more radiant you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <div key={method.label} className="bg-eternita-white rounded-2xl p-6 border border-eternita-taupe/30 card-hover">
                <div className="w-12 h-12 rounded-xl bg-eternita-teal/10 flex items-center justify-center text-eternita-teal mb-4">
                  {method.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-eternita-dark mb-2">{method.label}</h3>
                <ul className="space-y-1">
                  {method.details.map((d, i) => (
                    <li key={i} className="text-sm text-eternita-gray">{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 bg-eternita-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <span className="section-label">Get in Touch</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-dark mt-3 mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all placeholder:text-eternita-gray"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all placeholder:text-eternita-gray"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all placeholder:text-eternita-gray"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all placeholder:text-eternita-gray"
                      placeholder="(509) 986-3222"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">Subject</label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all text-eternita-dark"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Book an Appointment</option>
                    <option value="treatment">Treatment Question</option>
                    <option value="package">Package or Membership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-eternita-dark/70 mb-1.5 tracking-wide uppercase">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-eternita-taupe/60 bg-eternita-white text-sm outline-none focus:ring-2 focus:ring-eternita-teal/30 focus:border-eternita-teal transition-all resize-none placeholder:text-eternita-gray"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Side info */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-eternita-teal to-eternita-teal-dark rounded-3xl p-8 text-eternita-white sticky top-28">
                <h3 className="font-serif text-xl font-bold mb-4">Why Choose Eternita in Lynnwood?</h3>
                <ul className="space-y-4">
                  {[
                    'Complimentary consultations for all new guests',
                    'Licensed medical professionals on every shift',
                    'Customized treatment plans, not cookie-cutter menus',
                    'State-of-the-art FDA-cleared technology',
                    'A serene, spa-like environment minutes from Seattle',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-eternita-coral-light shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-2">Prefer to call?</p>
                  <a href="tel:+15099863222" className="text-xl font-bold hover:text-eternita-coral-light transition-colors">
                    (509) 986-3222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-dark mb-4">
            Ready to Book?
          </h2>
          <p className="text-eternita-gray max-w-lg mx-auto mb-8 text-sm md:text-base">
            Skip the form and book your appointment directly. Our scheduling team will confirm within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15099863222" className="btn-primary">
              Call to Book
            </a>
            <Link to="/treatments" className="btn-secondary">
              Browse Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}