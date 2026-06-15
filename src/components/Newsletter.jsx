export default function Newsletter() {
  return (
    <section className="bg-eternita-teal py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-eternita-white mb-3">
          Stay Connected
        </h2>
        <p className="text-eternita-teal-light text-base md:text-lg max-w-xl mx-auto mb-8">
          Be the first to know about exclusive treatments, seasonal offers, and wellness insights.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-full text-sm text-eternita-dark bg-eternita-white placeholder:text-eternita-gray outline-none focus:ring-2 focus:ring-eternita-coral"
          />
          <button
            type="submit"
            className="bg-eternita-coral text-eternita-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-eternita-coral-light hover:text-eternita-dark transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}