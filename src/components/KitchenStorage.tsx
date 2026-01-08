import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { toast } from 'sonner';

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

const KitchenStorage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/productsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        // Get products 2-5 for kitchen storage section
        setProducts(data.slice(1, 5));
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    loadCartItems();
  }, []);

  const loadCartItems = () => {
    const cartJSON = localStorage.getItem('heritique-cart');
    const cart = cartJSON ? JSON.parse(cartJSON) : [];
    const productIds = cart.map((item: any) => item.productId);
    setCartItems(productIds);
  };

  useEffect(() => {
    const handleCartUpdate = () => {
      loadCartItems();
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const handleProductClick = (productId: number) => {
    window.location.href = `/product/${productId}`;
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading kitchen storage...</p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Kitchen Storage</h2>
        <Link
          to="/shop"
          className="text-[#1e3a5f] hover:text-[#2d5282] font-semibold flex items-center gap-2 transition-colors"
        >
          View All
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountedPrice = product.price - (product.price * product.discount / 100);
          const hasDiscount = product.discount > 0;

          return (
            <div
              key={product.productId}
              onClick={() => handleProductClick(product.productId)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative">
                {hasDiscount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    Sale!
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.productTitle}
                  className="w-full h-56 object-cover"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
                  {product.productTitle}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    {hasDiscount && (
                      <span className="text-sm text-gray-400 line-through flex items-center">
                        <FaBangladeshiTakaSign className="mr-1" />
                        {(product.price / 100).toFixed(2)}
                      </span>
                    )}
                    <span className="text-xl font-bold text-gray-900 flex items-center">
                      <FaBangladeshiTakaSign className="mr-1" />
                      {(discountedPrice / 100).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    // Get current cart from localStorage
                    const cartJSON = localStorage.getItem('heritique-cart');
                    let cart = cartJSON ? JSON.parse(cartJSON) : [];
                    
                    if (cartItems.includes(product.productId)) {
                      // Remove from cart
                      cart = cart.filter((item: any) => item.productId !== product.productId);
                      localStorage.setItem('heritique-cart', JSON.stringify(cart));
                      window.dispatchEvent(new Event('cartUpdated'));
                      toast.success('Removed from cart');
                    } else {
                      // Add to cart
                      const existingItem = cart.find((item: any) => item.productId === product.productId);
                      if (existingItem) {
                        existingItem.quantity += 1;
                      } else {
                        cart.push({ productId: product.productId, quantity: 1 });
                      }
                      localStorage.setItem('heritique-cart', JSON.stringify(cart));
                      window.dispatchEvent(new Event('cartUpdated'));
                      toast.success('Added to cart successfully');
                    }
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    cartItems.includes(product.productId)
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-[#f5ea1b] hover:bg-[#e6db0c] text-gray-900'
                  }`}
                >
                  {cartItems.includes(product.productId) ? 'Remove from cart' : 'Add to cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KitchenStorage;