export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="relative z-10 p-6 md:p-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl md:text-3xl font-light tracking-widest text-gray-900">
            LUXE
          </div>
          <div className="hidden md:flex space-x-8 text-sm tracking-wide">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">FRAGRANCES</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">COLLECTIONS</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">ABOUT</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">CONTACT</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-8 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-gray-900 mb-6">
            Essence of
            <span className="block font-thin italic text-rose-600">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover our exclusive collection of premium fragrances, 
            crafted with the finest ingredients from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors">
              EXPLORE COLLECTION
            </button>
            <button className="border border-gray-900 text-gray-900 px-8 py-4 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-colors">
              SIGNATURE SCENTS
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-wide text-gray-900">
            Featured Fragrances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Midnight Rose", price: "$180", description: "A mysterious blend of dark roses and vanilla" },
              { name: "Golden Amber", price: "$220", description: "Warm amber notes with hints of sandalwood" },
              { name: "Ocean Breeze", price: "$160", description: "Fresh marine scents with citrus undertones" }
            ].map((perfume, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="w-16 h-24 bg-gray-300 mx-auto mb-4 rounded-sm"></div>
                      <p className="text-sm">Product Image</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-light mb-2 tracking-wide">{perfume.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{perfume.description}</p>
                  <p className="text-lg font-medium">{perfume.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-wide text-gray-900">
            The Art of Perfumery
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            For over three decades, we have been crafting exceptional fragrances that capture 
            the essence of luxury and sophistication. Each bottle tells a story, each scent 
            creates a memory.
          </p>
          <button className="text-sm tracking-wide text-gray-900 border-b border-gray-900 hover:border-gray-600 transition-colors">
            LEARN MORE ABOUT OUR HERITAGE
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-light tracking-widest mb-4">LUXE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium fragrances for the discerning individual.
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-wide mb-4">PRODUCTS</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Women&apos;s Fragrances</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Men&apos;s Fragrances</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-wide mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-wide mb-4">CONNECT</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 LUXE Perfumes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
