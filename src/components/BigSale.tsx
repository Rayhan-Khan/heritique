import { Link } from 'react-router-dom';

const BigSale = () => {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5282] rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Left side - Sale Icon and Text */}
          <div className="flex items-center gap-6">
            <div className="bg-[#f5ea1b] rounded-full p-4">
              <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-[#f5ea1b] text-5xl font-bold">BIG SALE</span>
                <span className="text-6xl font-bold text-white">20<span className="text-3xl">%</span></span>
                <span className="text-2xl font-semibold text-white">OFF</span>
              </div>
            </div>
          </div>

          {/* Middle - Kitchen utensils illustration */}
          <div className="hidden md:block">
            <div className="flex items-end gap-2">
              <div className="text-6xl opacity-80">🥄</div>
              <div className="text-7xl opacity-90">🍴</div>
              <div className="text-6xl opacity-80">🔪</div>
            </div>
          </div>

          {/* Right side - CTA */}
          <div className="text-right">
            <h3 className="text-white text-2xl font-bold mb-2">No Code Needed</h3>
            <p className="text-gray-200 text-sm mb-4">Limited Time Deal on Most of The Items</p>
            <Link
              to="/shop"
              className="inline-block bg-[#f5ea1b] hover:bg-[#e6db0c] text-gray-900 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200 shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSale;