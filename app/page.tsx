import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Floating snack animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="snack-float snack-1">🥜</div>
        <div className="snack-float snack-2">🍿</div>
        <div className="snack-float snack-3">🌾</div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                AnthroSnacks
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#story" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Story
              </a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Products
              </a>
              <a href="#waitlist" className="text-gray-700 hover:text-orange-600 transition font-medium">
                Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 animate-bounce">
            <span className="text-8xl">🥜</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            snacks with
            <br />
            <span className="text-orange-600">main character energy</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            we're serving premium snacks that actually taste good, no cap.
            <br />
            made with organic ingredients & packed with flavor ✨
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold mb-12">
            🎉 Join the waitlist for 10% off at launch
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-700 transition shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Join the Waitlist
            </a>
            <a
              href="#products"
              className="bg-white text-orange-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition border-2 border-orange-600 hover:scale-105"
            >
              See Products
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🌱", label: "Gluten Free" },
              { icon: "🌿", label: "Organic" },
              { icon: "💚", label: "Vegan" },
              { icon: "✨", label: "No Artificial Flavors" }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <p className="font-semibold text-gray-900">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              meet the snack squad 🔥
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              premium ingredients, unbeatable flavors, zero compromises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Premium Nut Mix",
                description: "the ultimate blend of roasted almonds, cashews & hazelnuts",
                price: "$9.99",
                emoji: "🥜",
                popular: true
              },
              {
                name: "Cinnamon Granola",
                description: "organic oats, honey & cinnamon for that sweet morning vibe",
                price: "$10.99",
                emoji: "🌾",
                popular: false
              },
              {
                name: "Spicy Popcorn",
                description: "air-popped perfection with a kick that hits different",
                price: "$9.99",
                emoji: "🍿",
                popular: true
              }
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden hover:-translate-y-2"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform">
                  {product.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-orange-600">
                    {product.price}
                  </span>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
                    Pre-order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                your new favorite snack brand (trust us)
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  we started AnthroSnacks because we were tired of choosing between healthy and tasty. why can't we have both?
                </p>
                <p>
                  so we created premium snacks with <span className="font-semibold text-gray-900">100% organic ingredients</span> that actually slap. no artificial flavors, no weird chemicals, just pure deliciousness.
                </p>
                <p>
                  we're serving culture, one crispy snack at a time. join the snack revolution 🚀
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl p-12 text-center animate-float">
                <div className="text-8xl mb-4">✨</div>
                <p className="text-2xl font-bold text-gray-900">
                  made with love
                  <br />
                  <span className="text-orange-600">& organic ingredients</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              questions? we got you 💬
            </h2>
            <p className="text-xl text-gray-600">
              everything you need to know about AnthroSnacks
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl">🎉</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            be the first to snack
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            join the waitlist and get <span className="font-bold">10% off</span> when we launch.
            <br />
            plus early access to all our flavors. bestie, you don't wanna miss this 👀
          </p>
          <WaitlistForm />
          <p className="mt-8 text-sm opacity-75">
            we respect your inbox. no spam, just snack updates ✌️
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            wanna stock our snacks?
          </h3>
          <p className="text-gray-600 mb-6">
            shoot us an email for wholesale inquiries
          </p>
          <a
            href="mailto:hello@anthrosnacks.com"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            hello@anthrosnacks.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-2">AnthroSnacks</h3>
          <p className="text-gray-400 mb-6">앤트로스낵 - premium snacks with main character energy</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#story" className="text-gray-400 hover:text-white transition">Story</a>
            <a href="#products" className="text-gray-400 hover:text-white transition">Products</a>
            <a href="#waitlist" className="text-gray-400 hover:text-white transition">Waitlist</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 AnthroSnacks. All rights reserved. Made with 💚 & organic ingredients.
          </p>
        </div>
      </footer>
    </main>
  );
}
