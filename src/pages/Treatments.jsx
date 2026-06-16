import { Link } from 'react-router-dom';
import { useCart } from '../contexts/cart-context';

const services = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial MD',
    price: 199,
    duration: '50 min',
    gradient: 'from-eternita-teal to-eternita-teal-dark',
    initials: 'HF',
    desc: 'The gold standard in medical-grade facial rejuvenation. Our HydraFacial MD combines vortex-cleaning, painless extractions, and intense hydration to deliver instant, visible results with zero downtime.',
    bullets: [
      'Deep pore cleansing and extraction',
      'Customizable serum infusion (antioxidants, peptides, hyaluronic acid)',
      'LED boost treatment optional add-on',
      'Instant glow with no irritation',
    ],
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 189,
    duration: '45 min',
    gradient: 'from-eternita-coral to-eternita-coral-light',
    initials: 'OF',
    desc: 'Infuse your skin with pure oxygen and concentrated active ingredients. This painless, refreshing treatment boosts circulation, reduces puffiness, and delivers an instant "glass skin" glow.',
    bullets: [
      'Pure oxygen infusion with active serums',
      'Brightens dull, tired complexions',
      'Reduces puffiness and boosts circulation',
      'Instant glow — perfect before an event',
    ],
  },
  {
    id: 'chemical-peel',
    name: 'Signature Chemical Peel',
    price: 179,
    duration: '45 min',
    gradient: 'from-eternita-teal-light to-eternita-teal',
    initials: 'CP',
    desc: 'Reveal fresher, younger skin beneath. Our medical-strength chemical peels are formulated to exfoliate damaged outer layers, stimulate cellular turnover, and correct uneven tone and texture.',
    bullets: [
      'Available in light, medium, and deep formulations',
      'Corrects hyperpigmentation and sun damage',
      'Smooths fine lines and acne scars',
      'Pre-treatment consultation included',
    ],
  },
  {
    id: 'body-contouring',
    name: 'Non-Surgical Body Contouring',
    price: 349,
    duration: '60 min',
    gradient: 'from-eternita-teal to-eternita-teal-light',
    initials: 'BC',
    desc: 'Sculpt your silhouette without surgery or downtime. Using advanced cryolipolysis and radiofrequency technology, we target stubborn fat pockets and tighten skin for a smoother, more contoured physique.',
    bullets: [
      'FDA-cleared cooling and RF technology',
      'Treats abdomen, thighs, arms, and flanks',
      'No incisions, no anesthesia, no recovery',
      'Visible results in 4–6 weeks',
    ],
  },
  {
    id: 'led-therapy',
    name: 'LED Light Therapy',
    price: 129,
    duration: '40 min',
    gradient: 'from-eternita-teal-dark to-eternita-coral',
    initials: 'LL',
    desc: 'Harness the power of therapeutic light wavelengths. Our medical-grade LED panels deliver precise red and blue light to combat acne, reduce inflammation, and stimulate collagen at the cellular level.',
    bullets: [
      'Red light: collagen stimulation, anti-aging',
      'Blue light: acne-causing bacteria elimination',
      'Painless, relaxing, and non-invasive',
      'Often paired with facials for amplified results',
    ],
  },
];

const additionalServices = [
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    price: 99,
    duration: '30 min',
    gradient: 'from-eternita-taupe to-eternita-teal-light',
    initials: 'DP',
    desc: 'Achieve instantly smoother skin with this gentle exfoliation treatment that removes dead skin cells and fine vellus hair for a luminous, polished complexion.',
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    price: 139,
    duration: '45 min',
    gradient: 'from-eternita-teal-light to-eternita-coral-light',
    initials: 'HF',
    desc: 'An ultra-nourishing facial designed for dehydrated and dull skin. Layers of hyaluronic acid, ceramides, and botanical extracts restore moisture balance and leave skin plump and dewy.',
  },
];

export default function Treatments() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-eternita-teal-dark via-eternita-teal to-eternita-teal-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="section-label text-eternita-coral-light">Treatments</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-eternita-white mt-3 mb-4">
            Advanced Aesthetics,<br />Timeless Results
          </h1>
          <p className="text-eternita-white/70 max-w-2xl text-sm md:text-lg">
            Every treatment at The Soap Tree is powered by medical-grade technology, delivered by licensed professionals, and tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Signature Services</span>
            <h2 className="section-heading mt-3">Our Most Requested Treatments</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              The treatments our clients return for again and again — each one backed by clinical evidence and exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-eternita-white rounded-2xl overflow-hidden border border-eternita-taupe/30 card-hover flex flex-col">
                {/* Image placeholder */}
                <div className="h-52 overflow-hidden relative">
                  <img src={`/images/service-${index + 1}.jpg`} alt={service.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-eternita-dark">{service.name}</h3>
                  <p className="text-eternita-teal text-2xl font-bold mt-1">${service.price}</p>
                  <p className="text-eternita-gray text-sm mt-3 leading-relaxed">{service.desc}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-eternita-dark/70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-eternita-teal shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, duration: service.duration, image: `/images/service-${index + 1}.jpg` })}
                      className="flex-1 py-2.5 rounded-full border border-eternita-teal text-eternita-teal text-sm font-medium hover:bg-eternita-teal hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                    <a href="tel:+18186343007" className="flex-1 btn-primary text-xs py-2.5 text-center">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Available */}
      <section className="py-20 md:py-28 bg-eternita-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Also Available</span>
            <h2 className="section-heading mt-3">More Ways to Glow</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              In addition to our signature menu, we offer these popular treatments for targeted results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={service.id} className="bg-eternita-white rounded-2xl overflow-hidden border border-eternita-taupe/30 card-hover">
                <div className="h-40 overflow-hidden relative">
                  <img src={`/images/service-${index + 7}.jpg`} alt={service.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-bold text-eternita-dark">{service.name}</h3>
                    <span className="text-eternita-gray text-xs">{service.duration}</span>
                  </div>
                  <p className="text-eternita-gray text-xs leading-relaxed">{service.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-eternita-teal text-xl font-bold">${service.price}</span>
                    <button
                      onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, duration: service.duration, image: `/images/service-${index + 7}.jpg` })}
                      className="py-2 px-5 rounded-full border border-eternita-teal text-eternita-teal text-xs font-medium hover:bg-eternita-teal hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-dark mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-eternita-gray max-w-lg mx-auto mb-8 text-sm md:text-base">
            Schedule a complimentary consultation and our expert team will design a personalized treatment roadmap just for you.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}