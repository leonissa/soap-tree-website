import { useState } from 'react';

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '15K+', label: 'Treatments Performed' },
  { value: '98%', label: 'Client Retention' },
  { value: '4.9★', label: 'Average Rating' },
];

const values = [
  {
    title: 'Medical Excellence',
    desc: 'Every treatment at Treasurer is supervised by licensed medical professionals. We invest in the latest FDA-cleared technology and adhere to the highest clinical standards in the industry.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Client-Centered',
    desc: 'Your comfort, goals, and well-being come first. We listen before we recommend, and we never upsell treatments you do not need. Our relationship is built on trust and transparency.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Holistic Wellness',
    desc: 'True beauty radiates from within. That is why our approach integrates skin health with nutritional support, stress reduction, and lifestyle guidance for complete, lasting transformation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Timeless Beauty',
    desc: 'We do not chase trends. Our philosophy is rooted in enhancing your natural features with subtle, sophisticated results that age gracefully and make you feel like the best version of yourself.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'What should I expect during my first visit?',
    a: 'Your first visit begins with a complimentary consultation where we assess your skin, discuss your goals, and review your medical history. We take the time to understand your needs before recommending any treatment. Most first-time guests spend about 60–90 minutes with us.',
  },
  {
    q: 'Are your treatments safe for all skin types?',
    a: 'Absolutely. Our treatments are carefully selected and calibrated to work across all skin tones and types. Our medical team conducts a thorough skin assessment before every procedure to ensure safety and efficacy for your unique complexion.',
  },
  {
    q: 'How much downtime should I expect?',
    a: 'Most of our treatments are designed with minimal to zero downtime. HydraFacial MD and LED therapy have no recovery period. Microneedling and chemical peels may involve mild redness for 24–48 hours. We always provide detailed aftercare instructions.',
  },
  {
    q: 'Do you offer payment plans or financing?',
    a: 'Yes. We partner with trusted financing providers to offer flexible monthly payment options. Our Diamond Membership and packages also provide excellent value for clients seeking ongoing care. Ask our team about current financing specials.',
  },
  {
    q: 'How many sessions will I need to see results?',
    a: 'Many treatments deliver visible results after a single session — especially HydraFacial MD and chemical peels. For collagen-stimulating treatments like microneedling, optimal results are typically achieved after 3 sessions spaced 4 weeks apart. Your provider will outline a personalized plan during your consultation.',
  },
  {
    q: 'Can I combine multiple treatments in one visit?',
    a: 'Yes. Many of our guests combine treatments for enhanced results. Popular pairings include HydraFacial MD with LED therapy, or microneedling with PRP. We call these "stacked sessions" and they are a great way to maximize your time and results.',
  },
  {
    q: 'What is the difference between a medical spa and a regular spa?',
    a: 'Unlike traditional day spas, a medical spa operates under the supervision of licensed medical professionals and offers clinical-grade treatments that go beyond the surface. At Treasurer, every treatment is performed or overseen by registered nurses and nurse practitioners using advanced medical technology.',
  },
  {
    q: 'Do you treat men as well?',
    a: 'Absolutely. Skincare is for everyone. We have a growing number of male clients who appreciate our results-driven, no-fuss approach. Popular men\'s treatments include HydraFacial MD and body contouring.',
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-eternita-teal-dark via-eternita-teal to-eternita-teal-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="section-label text-eternita-coral-light">About Us</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-eternita-white mt-3 mb-4">
            Elevated Wellness,<br />Expertly Delivered
          </h1>
          <p className="text-eternita-white/70 max-w-2xl text-sm md:text-lg">
            Treasurer was founded with one belief — that everyone deserves access to medical-grade skincare in an environment that feels like a sanctuary.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-dark mt-3 mb-6">
                Rooted in the Pacific Northwest, Built for You
              </h2>
              <div className="space-y-4 text-eternita-gray text-sm md:text-base leading-relaxed">
                <p>
                  Treasurer was born from a simple observation: the med spa industry was full of hype but short on genuine, results-driven care. Our founders — a team of registered nurses and wellness practitioners — wanted to create something different: a place where advanced medical aesthetics meets authentic hospitality.
                </p>
                <p>
                  We opened our doors in Lynnwood with a clear mission: to offer transformative treatments in a space that feels more like a wellness retreat than a clinic. Nestled near Alderwood Mall and serving the greater Seattle metro area, every detail from the warm finishes to the curated treatment menu was designed with intentionality.
                </p>
                <p>
                  Today, Treasurer is home to a team of over 20 licensed professionals, each committed to continuing education and mastering the latest techniques. We invest in the best technology, the finest products, and — most importantly — genuine relationships with every client who walks through our doors in the Pacific Northwest.
                </p>
                <p>
                  Whether you are a first-time visitor or a longtime member, you are not just a client at Treasurer. You are part of our family.
                </p>
              </div>
            </div>
            <div className="h-80 md:h-96 rounded-3xl overflow-hidden">
              <img
                src="/images/about-story.jpg"
                alt="Treasurer story - Lynnwood, WA"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Values</span>
            <h2 className="section-heading mt-3">What We Stand For</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Four core principles guide every decision we make and every treatment we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-hover bg-eternita-white rounded-2xl p-6 border border-eternita-taupe/30">
                <div className="w-14 h-14 rounded-xl bg-eternita-teal/10 flex items-center justify-center text-eternita-teal mb-5">
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-eternita-dark mb-2">{v.title}</h3>
                <p className="text-eternita-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-eternita-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 text-eternita-teal/30 mx-auto mb-6">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.144 11 15c0 1.93-1.57 3.5-3.5 3.5-1.282 0-2.484-.685-2.917-1.179zm9.129 0C12.682 16.227 12.129 15 12.129 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C18.72 11.69 20.129 13.144 20.129 15c0 1.93-1.57 3.5-3.5 3.5-1.282 0-2.484-.685-2.917-1.179z" />
          </svg>
          <p className="font-serif text-xl md:text-2xl italic text-eternita-dark/80 leading-relaxed mb-6">
            "We believe that beauty is about revealing the most radiant version of yourself — just like the natural splendor of the Pacific Northwest. At Treasurer in Lynnwood, we combine science, art, and genuine care to help you glow from the inside out, rain or shine."
          </p>
          <p className="font-semibold text-eternita-dark">— The Treasurer Team</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">FAQ</span>
            <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
            <p className="text-eternita-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Everything you need to know before your first visit to Treasurer.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-eternita-white rounded-xl border border-eternita-taupe/30 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm md:text-base text-eternita-dark pr-4">{faq.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 text-eternita-teal shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-eternita-gray leading-relaxed border-t border-eternita-taupe/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}