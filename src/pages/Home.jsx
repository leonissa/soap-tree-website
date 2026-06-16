import { Link } from 'react-router-dom';
import { useCart } from '../contexts/cart-context';

const stats = [
  { value: '500+', label: 'Treatments' },
  { value: '5K+', label: 'Clients' },
  { value: '30+', label: 'Services' },
  { value: '97%', label: 'Satisfaction' },
];

const approachCards = [
  {
    title: 'Medical-Grade',
    desc: 'Every treatment is performed under the supervision of licensed medical professionals using FDA-cleared technology and clinically proven protocols.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Personalized Care',
    desc: 'No two faces are alike. We design fully customized treatment plans tailored to your skin type, goals, and lifestyle.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Relaxing Environment',
    desc: 'Step into a sanctuary of calm. Our studio is designed to soothe your senses and elevate your wellness experience from the moment you arrive.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Proven Results',
    desc: 'We track outcomes. From before-and-after imaging to client satisfaction scores, our results speak for themselves.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const featuredServices = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial MD',
    price: 199,
    gradient: 'from-eternita-teal to-eternita-teal-dark',
    initials: 'HF',
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 189,
    gradient: 'from-eternita-coral to-eternita-coral-light',
    initials: 'OF',
  },
  {
    id: 'chemical-peel',
    name: 'Signature Chemical Peel',
    price: 179,
    gradient: 'from-eternita-teal-light to-eternita-teal',
    initials: 'CP',
  },
  ];

const testimonials = [
  {
    name: 'Emma Thornton',
    quote: 'I\'ve visited med spas across Los Angeles and nothing compares to the personalized care at The Soap Tree in Northridge. The HydraFacial MD transformed my complexion after just one session — my skin has never looked this radiant, even through our dry Southern California summers.',
    title: 'Loyal Client since 2023',
  },
  {
    name: 'Daniel Kwon',
    quote: 'The team at The Soap Tree took the time to understand my concerns and designed a personalized plan that actually delivered. Living in Northridge, I love that world-class medical aesthetics is right in my neighborhood — the results from PRP microneedling exceeded my expectations.',
    title: 'Wellness Advocate',
  },
  {
    name: 'Rachel O\'Brien',
    quote: 'From the moment I stepped through the doors, I felt a sense of calm that\'s hard to find in the city. The studio is stunning, the staff is incredibly knowledgeable, and coming here from across the Valley is always worth the drive. The Soap Tree is pure magic.',
    title: 'Monthly Visitor',
  },
  {
    name: 'Priya Sharma',
    quote: 'After trying countless skincare routines, The Soap Tree\'s medical-grade approach was the game-changer I needed. Their body contouring treatment gave me the confidence I\'ve been searching for, and I love knowing this level of care is available right here in Northridge near the Fashion Center.',
    title: 'Transformational Journey',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-eternita-teal-dark via-eternita-teal to-eternita-teal-light py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-eternita-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-eternita-coral blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="text-center lg:text-left">
              <span className="section-label text-eternita-coral-light">Medical Spa &amp; Wellness</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-eternita-white leading-tight mt-3 mb-6 animate-fade-in">
                Rediscover Your<br />
                <span className="text-eternita-coral-light">Radiance</span>
              </h1>
              <p className="text-eternita-white/80 text-lg max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in">
                Where timeless beauty meets advanced medical science in the San Fernando Valley. Experience transformative care in the heart of Northridge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Link to="/treatments" className="btn-primary bg-eternita-white text-eternita-teal hover:bg-eternita-coral-light hover:text-eternita-dark">
                  Explore Treatments
                </Link>
                <Link to="/contact" className="btn-secondary border-eternita-white text-eternita-white hover:bg-eternita-white hover:text-eternita-teal">
                  Book a Consultation
                </Link>
              </div>
            </div>
            {/* Image side */}
            <div className="relative animate-fade-in">
              <div className="h-72 sm:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-eternita-white/20">
                <img src="/images/hero-spa.jpg" alt="Relaxing spa treatment at The Soap Tree" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-eternita-dark py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-eternita-white">{stat.value}</p>
                <p className="text-eternita-gray text-sm mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Approach</span>
            <h2 className="section-heading mt-3">Why The Soap Tree?</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              We don't believe in one-size-fits-all. Every treatment is curated to your unique biology, goals, and timeline — right here in our Northridge studio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachCards.map((card) => (
              <div key={card.title} className="card-hover bg-eternita-white rounded-2xl p-6 border border-eternita-taupe/30">
                <div className="w-14 h-14 rounded-xl bg-eternita-teal/10 flex items-center justify-center text-eternita-teal mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-eternita-dark mb-2">{card.title}</h3>
                <p className="text-eternita-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-28 bg-eternita-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading mt-3">Featured Treatments</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Curated, medical-grade treatments designed to restore, rejuvenate, and reveal your best self.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="card-hover bg-eternita-white rounded-2xl overflow-hidden border border-eternita-taupe/30">
                {/* Image placeholder */}
                <div className="h-48 overflow-hidden">
                  <img src={`/images/service-${index + 1}.jpg`} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-eternita-dark">{service.name}</h3>
                  <p className="text-eternita-teal text-xl font-bold mt-1">${service.price}</p>
                  <button
                    onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, image: `/images/service-${index + 1}.jpg` })}
                    className="mt-4 w-full py-2.5 rounded-full border border-eternita-teal text-eternita-teal text-sm font-medium hover:bg-eternita-teal hover:text-white transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/treatments" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Our Studio */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-eternita-teal to-eternita-teal-dark rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/hero-studio.jpg"
                  alt="The Soap Tree studio in Northridge, CA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content side */}
              <div className="p-8 md:p-14 flex flex-col justify-center">
                <span className="section-label text-eternita-coral-light">Visit Us</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-white mt-3 mb-4">
                  Experience The Soap Tree in Person
                </h2>
                <p className="text-eternita-white/70 text-sm md:text-base leading-relaxed mb-6">
                  Step into our tranquil studio in the heart of Northridge. From the moment you arrive, every detail is designed to help you unwind, recharge, and transform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="btn-primary bg-eternita-white text-eternita-teal hover:bg-eternita-coral-light hover:text-eternita-dark">
                    Book Your Visit
                  </Link>
                  <a href="tel:+18186343007" className="btn-secondary border-eternita-white text-eternita-white hover:bg-eternita-white hover:text-eternita-teal">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories / Testimonials */}
      <section className="py-20 md:py-28 bg-eternita-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 className="section-heading mt-3">Real Results, Real People</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Hear from those who have trusted us with their wellness journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-eternita-white rounded-2xl p-6 md:p-8 border border-eternita-taupe/30 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-eternita-coral">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-eternita-dark/80 text-sm md:text-base leading-relaxed italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-eternita-dark text-sm">{t.name}</p>
                  <p className="text-eternita-gray text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}