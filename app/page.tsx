import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Falling Seaweed Animation - limited to top sections */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-10" style={{ height: '800px' }}>
        <div className="seaweed-fall"></div>
        <div className="seaweed-fall"></div>
        <div className="seaweed-fall"></div>
        <div className="seaweed-fall"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="AnthroSnacks Logo"
                width={180}
                height={50}
                className="h-6 sm:h-8 w-auto"
                priority
              />
            </div>
            <div className="flex space-x-6 sm:space-x-8 md:space-x-12">
              <a href="#products" className="text-xs sm:text-sm text-gray-700 hover:text-black transition tracking-wide">
                Products
              </a>
              <a href="#waitlist" className="text-xs sm:text-sm text-gray-700 hover:text-black transition tracking-wide">
                Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-stone-50 to-white relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight sm:leading-none animate-fadeInUp">
            The Snack
            <br />
            <span className="font-normal">Everyone's</span>
            <br />
            <span className="font-normal">Talking About</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fadeInUp animate-delay-100">
            Low calorie, guilt-free indulgence.
            <br className="hidden sm:block" />
            Healthy snacking that's simply addictive.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14 md:mb-16 pb-10 sm:pb-12 border-b border-gray-200 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-1">50K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Waitlist</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-1">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-600">Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-1">100K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Sold</div>
            </div>
          </div>

          {/* Hero Waitlist Form */}
          <div className="max-w-xl mx-auto animate-fadeInUp animate-delay-200">
            <WaitlistForm variant="light" />
            <div className="mt-6 text-center">
              <p className="text-base sm:text-lg text-gray-700 font-light">
                🎁 Sign up now and get <span className="font-semibold text-orange-600">10% OFF</span> your first order!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                label: "Gluten Free",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 2L3 8l6 6 6-6-6-6z"/>
                    <path d="M15 8l6 6-6 6-6-6 6-6z"/>
                  </svg>
                )
              },
              {
                label: "USDA Organic",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v12M6 12h12"/>
                  </svg>
                )
              },
              {
                label: "Vegan",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M7 12l3 3 7-7"/>
                  </svg>
                )
              },
              {
                label: "Non-GMO",
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black text-white flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-800 transition">
                  <div className="scale-75 sm:scale-100">
                    {item.icon}
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs tracking-widest text-gray-900 uppercase font-light">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 bg-stone-50 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight animate-fadeInUp">
              The Collection
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
              Each product is carefully selected and crafted to deliver exceptional quality and taste.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {[
              {
                name: "Korean Seaweed — Original",
                description: "Premium roasted seaweed with a delicate umami flavor",
                price: "$12",
                images: ["/seaweed-1.svg", "/seaweed.svg", "/seaweed-2.svg"]
              },
              {
                name: "Korean Seaweed — Sea Salt",
                description: "Lightly seasoned with mineral-rich sea salt",
                price: "$12",
                images: ["/seaweed-1-seasalt.svg", "/seaweed-seasalt.svg", "/seaweed-2-seasalt.svg"]
              },
              {
                name: "Korean Seaweed — Spicy",
                description: "Bold heat balanced with savory depth",
                price: "$12",
                images: ["/seaweed-1-spicy.svg", "/seaweed-spicy.svg", "/seaweed-2-spicy.svg"]
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-xl sm:text-2xl font-light text-gray-900">
                        {product.price}
                      </span>
                      <button className="text-xs sm:text-sm tracking-wide text-gray-700 hover:text-black transition underline">
                        Notify Me
                      </button>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light max-w-2xl">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 sm:p-8 md:p-12 aspect-square flex items-center justify-center border border-gray-100 hover:border-gray-200 transition"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 bg-white relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight animate-fadeInUp">
              Our Philosophy
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 leading-relaxed font-light">
            <p>
              AnthroSnacks was founded on a simple belief: snacking should never compromise on quality or taste.
            </p>
            <p>
              We source only the finest organic ingredients, working directly with sustainable farms to ensure every product meets our exacting standards.
            </p>
            <p>
              Each recipe is developed through careful consideration of flavor, texture, and nutritional value—creating snacks that elevate everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* Influencer Reviews Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 bg-stone-50 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight animate-fadeInUp">
              Going Viral Worldwide
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light">
              See why everyone's obsessed
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                {/* Video Placeholder */}
                <div className="bg-gray-300 aspect-[9/16] mb-6 flex items-center justify-center rounded-lg overflow-hidden hover:bg-gray-400 transition">
                  <svg className="w-16 h-16 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>

                {/* Influencer Info */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <p className="text-sm font-light text-gray-900">@influencer_{item}</p>
                  <p className="text-xs text-gray-500 mt-1">Food & Lifestyle</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 bg-stone-50 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 sm:mb-6 tracking-tight animate-fadeInUp">
              Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-12 bg-black text-white relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span>⚡</span>
            50,247 people already joined
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 sm:mb-6 tracking-tight animate-fadeInUp">
            Don't Miss Out
          </h2>
          <p className="text-lg sm:text-xl mb-3 sm:mb-4 opacity-90 font-light leading-relaxed">
            Join 50K+ people waiting for the launch.
          </p>
          <p className="text-xl sm:text-2xl mb-10 sm:mb-12 font-normal">
            Get <span className="text-orange-400">10% OFF</span> + Early Access
          </p>
          <WaitlistForm />
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm opacity-60">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Exclusive access</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Launch notification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="AnthroSnacks Logo"
                width={140}
                height={40}
                className="h-5 sm:h-6 w-auto opacity-60"
              />
            </div>
            <div className="flex gap-8 sm:gap-12 text-xs sm:text-sm text-gray-600">
              <a href="#story" className="hover:text-black transition">Our Story</a>
              <a href="#products" className="hover:text-black transition">Products</a>
              <a href="mailto:hello@anthrosnacks.com" className="hover:text-black transition">Contact</a>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-500 font-light">
            © 2026 AnthroSnacks. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
