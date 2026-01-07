import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Product {
  productId: number;
  productTitle: string;
  image: string;
  price: number;
  discount: number;
  rating: number;
  popularity: number;
  description: string;
}

const FeaturedProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/productsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        // Get the first product as featured
        setProduct(data[0]);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading featured product...</p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="mb-16">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Left Side - Product Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Featured Product
            </h2>
            
            <h3 className="text-2xl font-semibold text-gray-800">
              {product.productTitle}
            </h3>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="font-semibold mr-2">Layer Design:</span>
                <span>Keeps wet and dry ingredients separate—no more soggy meals.</span>
              </div>
              
              <div className="flex items-start">
                <span className="font-semibold mr-2">High Quality:</span>
                <span>Food-grade, BPA-free, dishwasher safe, and built to last.</span>
              </div>
              
              <div className="flex items-start">
                <span className="font-semibold mr-2">Portable:</span>
                <span>Comes with fork, sauce cup, and folding handle—fits in most lunch bags.</span>
              </div>
              
              <div className="flex items-start">
                <span className="font-semibold mr-2">Seal Design:</span>
                <span>Leak-proof with silicone seals—even if flipped upside down.</span>
              </div>
              
              <div className="flex items-start">
                <span className="font-semibold mr-2">Easy to Fill & Clean:</span>
                <span>Wide mouth for easy access and smooth surface for quick cleaning.</span>
              </div>
            </div>

            <Link
              to="/shop"
              className="inline-block bg-[#1e3a5f] hover:bg-[#2d5282] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Buy Now
            </Link>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative">
            <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-md border-2 border-yellow-400">
              <span className="font-bold text-lg">4 pack</span>
            </div>
            <img
              src={product.image}
              alt={product.productTitle}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;