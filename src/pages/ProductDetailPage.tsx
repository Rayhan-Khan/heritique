import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import ProductCard from '../components/ProductCard';

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

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('/productsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        const foundProduct = data.find(p => p.productId === parseInt(productId || '0'));
        
        if (!foundProduct) {
          setError('Product not found');
        } else {
          setProduct(foundProduct);
          // Get 4 random related products (excluding current product)
          const relatedProducts = data
            .filter(p => p.productId !== foundProduct.productId)
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
          setAllProducts(relatedProducts);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <p className="text-red-500 text-lg mb-4">{error || 'Product not found'}</p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Go to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  const discountedPrice = product.price - (product.price * product.discount / 100);
  
  // Create multiple image thumbnails (simulating gallery)
  const productImages = [product.image, product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary-500">Food serving suppliers</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.productTitle}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Product Images */}
          <div>
            <div className="relative">
              {/* Sale Badge */}
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10">
                  Sale!
                </div>
              )}
              
              {/* Main Image */}
              <div className="bg-white rounded-lg p-8 mb-4 flex items-center justify-center" style={{ minHeight: '400px' }}>
                <img
                  src={productImages[selectedImage]}
                  alt={product.productTitle}
                  className="max-w-full h-auto object-contain max-h-96"
                />
              </div>

              {/* Zoom Icon */}
              <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg p-2 border-2 transition-all ${
                    selectedImage === index
                      ? 'border-yellow-400'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.productTitle}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              {product.discount > 0 && (
                <span className="text-xl text-gray-400 line-through flex items-center">
                  <FaBangladeshiTakaSign className="mr-1" />
                  {(product.price / 100).toFixed(2)}
                </span>
              )}
              <span className="text-3xl font-bold text-gray-900 flex items-center">
                <FaBangladeshiTakaSign className="mr-2" />
                {(discountedPrice / 100).toFixed(2)}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-[#f5ea1b] hover:bg-[#e6db0c] text-gray-900 px-8 py-3 rounded-md font-bold text-lg transition-colors duration-200">
                Add to cart
              </button>
            </div>

            {/* Description Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <div className="text-gray-700 space-y-3">
                {product.description.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph starts with a title (all caps with colon)
                  const parts = paragraph.split(':');
                  if (parts.length > 1 && parts[0] === parts[0].toUpperCase()) {
                    return (
                      <div key={index} className="flex gap-2">
                        <span className="text-gray-900">•</span>
                        <p>
                          <span className="font-semibold text-gray-900">{parts[0]}:</span>
                          <span className="text-gray-700">{parts.slice(1).join(':')}</span>
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.productId} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}