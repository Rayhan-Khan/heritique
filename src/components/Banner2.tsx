import { Link } from 'react-router-dom';

const Banner2 = () => {
  return (
    <div className="mb-16">
      {/* Top Sale Banner */}
      {/* <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] rounded-xl shadow-lg mb-8">
        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-6">
            <div className="bg-yellow-400 rounded-full p-3">
              <svg className="w-8 h-8 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-yellow-400 text-3xl font-bold">BIG SALE</span>
              <span className="text-4xl font-bold text-white">20<span className="text-2xl">%</span></span>
              <span className="text-xl font-semibold text-white">OFF</span>
            </div>
          </div>

          <div className="hidden md:flex items-end gap-2 opacity-70">
            <div className="text-4xl">🥄</div>
            <div className="text-5xl">🍴</div>
            <div className="text-4xl">🔪</div>
          </div>

          <div className="text-right">
            <h3 className="text-white text-xl font-bold mb-1">No Code Needed</h3>
            <p className="text-gray-200 text-xs mb-3">Limited Time Deal on Most of The Items</p>
            <Link
              to="/shop"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-[#1e3a5f] px-6 py-2 rounded-lg font-bold transition-colors duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div> */}

      {/* Main Content Banner */}
      <div className="bg-gradient-to-r from-gray-100 to-yellow-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800"
              alt="Modern Kitchen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center p-12 bg-yellow-400">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              We Keep Kitchens Simple
            </h2>
            
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              We believe every kitchen deserves tools that make cooking easier and more enjoyable—without breaking the bank.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-[#1e3a5f] hover:bg-[#2d5282] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg self-start"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] rounded-xl shadow-lg mt-8 px-8 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-3xl font-bold">Love a Tidy, Efficient Kitchen?</h3>
          <div className="flex items-center gap-4">
            <span className="text-gray-200 text-lg">Find everything your need to start.</span>
            <Link
              to="/shop"
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1e3a5f] px-8 py-3 rounded-lg font-bold transition-colors duration-200 whitespace-nowrap"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;