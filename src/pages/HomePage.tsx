import FeaturedProducts from '../components/FeaturedProducts';
import KitchenStorage from '../components/KitchenStorage';
import KitchenEssentials from '../components/KitchenEssentials';
import TipsAndAdvice from '../components/TipsAndAdvice';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import FoodServingSuppliers from '@/components/FoodServingSuppliers';
import BigSale from '@/components/BigSale';
import Banner2 from '@/components/Banner2';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesBar />
       {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
              <FeaturedProducts />
              <KitchenStorage />
              <FoodServingSuppliers />
              <KitchenEssentials />
              <BigSale />
              <Banner2 />
              <TipsAndAdvice />
            </div>
    </>
  );
}
