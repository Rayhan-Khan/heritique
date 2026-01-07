import FeaturedProducts from '../components/FeaturedProducts';
import KitchenStorage from '../components/KitchenStorage';
import KitchenEssentials from '../components/KitchenEssentials';
import TipsAndAdvice from '../components/TipsAndAdvice';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white-base to-secondary-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Welcome to Heritique
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto">
            Discover modern kitchen tools and smart storage solutions for your home
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Quality Products</h3>
              <p className="text-neutral-600 text-sm">
                Premium kitchen essentials crafted for modern living
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Fast Delivery</h3>
              <p className="text-neutral-600 text-sm">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Modern Design</h3>
              <p className="text-neutral-600 text-sm">
                Stylish and functional designs for every kitchen
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Secure Shopping</h3>
              <p className="text-neutral-600 text-sm">
                Safe and secure checkout with multiple payment options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        <FeaturedProducts />
        <KitchenStorage />
        <KitchenEssentials />
        <TipsAndAdvice />
      </div>

      
    </div>
  );
}
