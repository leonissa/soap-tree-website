import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const packages = [
  {
    id: 'glow-starter',
    name: 'Glow Starter',
    price: 1500,
    badge: 'BEST FOR FIRST-TIMERS',
    badgeColor: 'bg-eternita-teal-light',
    gradient: 'from-eternita-teal-light to-eternita-teal',
    initials: 'GS',
    desc: 'The perfect introduction to medical-grade skincare. This curated bundle pairs our most beloved facial treatments to give your skin a fresh start and a luminous, even-toned foundation.',
    items: [
      '3 x HydraFacial MD sessions',
      '1 x Signature Chemical Peel',
      'Customized home-care regimen consultation',
      'Complimentary skin analysis with AI imaging',
    ],
  },
  {
    id: 'radiance-boost',
    name: 'Radiance Boost',
    price: 1580,
    badge: 'BEST VALUE',
    badgeColor: 'bg-eternita-coral-light',
    gradient: 'from-eternita-coral-light to-eternita-coral',
    initials: 'RB',
    desc: 'Triple-action brightening for dull, tired skin. Combining oxygen infusion, chemical exfoliation, and deep hydration, this package delivers a multi-dimensional glow that lasts.',
    items: [
      '4 x Oxygen Facial sessions',
      '2 x Hydrating Facial sessions',
      '1 x LED Light Therapy booster',
      'Take-home vitamin C serum',
    ],
  },
  {
    id: 'body-sculpt',
    name: 'Body Sculpt',
    price: 1650,
    badge: null,
    badgeColor: '',
    gradient: 'from-eternita-teal-dark to-eternita-teal',
    initials: 'BS',
    desc: 'Non-invasive body contouring designed to target stubborn fat and tighten loose skin. Perfect for post-pregnancy, post-weight-loss, or anyone seeking a more sculpted silhouette.',
    items: [
      '4 x Non-Surgical Body Contouring sessions',
      '2 x Radiofrequency skin tightening add-ons',
      'Personalized nutrition and lymphatic health guide',
      'Progress photos with digital measurement tracking',
    ],
  },
  {
    id: 'ageless-revival',
    name: 'Ageless Revival',
    price: 1720,
    badge: null,
    badgeColor: '',
    gradient: 'from-eternita-teal to-eternita-coral',
    initials: 'AR',
    desc: 'Collagen induction at its finest. This package combines microneedling with PRP and supportive LED therapy for dramatic improvements in texture, firmness, and overall skin youthfulness.',
    items: [
      '3 x Microneedling with PRP sessions',
      '3 x LED Light Therapy recovery sessions',
      'Medical-grade peptide serum (3-month supply)',
      'Monthly progress consultation with clinical imaging',
    ],
  },
  {
    id: 'total-wellness',
    name: 'Total Wellness',
    price: 1800,
    badge: 'MOST POPULAR',
    badgeColor: 'bg-eternita-teal',
    gradient: 'from-eternita-teal to-eternita-teal-dark',
    initials: 'TW',
    desc: 'Our comprehensive wellness package — the ultimate mind-body-skin experience. From advanced facial treatments to full-body LED sessions, this is holistic rejuvenation at its most elevated.',
    items: [
      '4 x HydraFacial MD sessions',
      '2 x Full-body LED Light Therapy sessions',
      '1 x Full-body LED Light Therapy session',
      'Wellness assessment with registered nurse',
      'Exclusive Treasurer wellness journal',
    ],
  },
  {
    id: 'vip-platinum',
    name: 'VIP Platinum',
    price: 1900,
    badge: null,
    badgeColor: '',
    gradient: 'from-eternita-coral to-eternita-teal-dark',
    initials: 'VP',
    desc: 'A three-month transformative journey designed for those who want it all. This VIP experience includes priority booking, a dedicated care coordinator, and a fully customized treatment schedule.',
    items: [
      '6 treatments of your choice from our full menu',
      'Dedicated personal care coordinator',
      'Priority booking — no waitlist, ever',
      'Exclusive 15% discount on retail products',
      'Complimentary welcome gift ($200 value)',
    ],
  },
  {
    id: 'diamond-membership',
    name: 'Diamond Membership',
    price: 2000,
    badge: 'PREMIUM CHOICE',
    badgeColor: 'bg-eternita-coral',
    gradient: 'from-eternita-teal-dark to-eternita-coral',
    initials: 'DM',
    desc: 'The ultimate Treasurer experience. This monthly membership grants you unlimited access to select treatments, VIP perks, and a continuous, evolving wellness plan curated by our senior medical team.',
    items: [
      '2 treatments per month from our premium menu',
      'Unlimited LED Light Therapy sessions',
      'Quarterly advanced consultation with medical director',
      'Complimentary guest pass for a friend each month',
      '$200 monthly credit toward retail and add-on services',
    ],
  },
];

export default function Packages() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-eternita-teal-dark via-eternita-teal to-eternita-teal-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-eternita-coral-light">Packages</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-eternita-white mt-3 mb-4">
            Curated Journeys,<br />Exceptional Value
          </h1>
          <p className="text-eternita-white/70 max-w-2xl mx-auto text-sm md:text-lg">
            Save more while experiencing more. Our packages bring together complementary treatments for transformative, lasting results.
          </p>
        </div>
      </section>

      {/* Package Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`bg-eternita-white rounded-2xl overflow-hidden border border-eternita-taupe/30 card-hover flex flex-col ${
                  pkg.badge === 'MOST POPULAR' || pkg.badge === 'PREMIUM CHOICE' ? 'ring-2 ring-eternita-coral relative' : ''
                }`}
              >
                {(pkg.badge === 'MOST POPULAR' || pkg.badge === 'PREMIUM CHOICE') && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-eternita-coral text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                {/* Image */}
                <div className="h-44 overflow-hidden relative">
                  <img src={`/images/package-${index + 1}.jpg`} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {pkg.badge && pkg.badge !== 'MOST POPULAR' && pkg.badge !== 'PREMIUM CHOICE' && (
                    <span className={`absolute top-4 left-4 ${pkg.badgeColor} text-eternita-dark text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase`}>
                      {pkg.badge}
                    </span>
                  )}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                    ${pkg.price}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-eternita-dark">{pkg.name}</h3>
                  <p className="text-eternita-gray text-sm mt-2 leading-relaxed">{pkg.desc}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-eternita-dark/70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-eternita-teal shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-eternita-taupe/30">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-eternita-gray text-xs">Package price</span>
                      <span className="font-serif text-2xl font-bold text-eternita-teal">${pkg.price.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => addToCart({ id: pkg.id, name: pkg.name, price: pkg.price, image: `/images/package-${index + 1}.jpg` })}
                        className="flex-1 py-2.5 rounded-full border border-eternita-teal text-eternita-teal text-sm font-medium hover:bg-eternita-teal hover:text-white transition-all"
                      >
                        Add to Cart
                      </button>
                      <a href="tel:+15099863222" className="flex-1 btn-primary text-xs py-2.5 text-center">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-eternita-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-dark mb-4">
            Build Your Own Package
          </h2>
          <p className="text-eternita-gray max-w-lg mx-auto mb-8 text-sm md:text-base">
            Don't see exactly what you're looking for? We'll custom-design a package around your unique goals. Contact us for a personalized quote.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}