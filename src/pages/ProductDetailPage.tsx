import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaBangladeshiTakaSign, FaArrowLeft, FaStar } from 'react-icons/fa6';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

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
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
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
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8"
          >
            <FaArrowLeft /> Back
          </button>
          <div className="text-center">
            <p className="text-red-500 text-lg">{error || 'Product not found'}</p>
          </div>
        </div>
      </div>
    );
  }

  const discountedPrice = product.price - (product.price * product.discount / 100);
  const ratingStars = Math.floor(product.rating);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary-500">Shop</Link>
          <span>/</span>
          <span className="text-primary-500">{product.productTitle}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-white rounded-lg p-8 shadow-md">
            <img
              src={product.image}
              alt={product.productTitle}
              className="max-w-full h-auto object-contain max-h-96"
            />
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.productTitle}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < ratingStars ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.popularity} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-gray-800 flex items-center">
                    <FaBangladeshiTakaSign className="mr-2" /> {(discountedPrice / 100).toFixed(2)}
                  </span>
                </div>
                {product.discount > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl text-gray-500 line-through flex items-center">
                      <FaBangladeshiTakaSign className="mr-1" /> {(product.price / 100).toFixed(2)}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-md font-semibold">
                      -{product.discount}%
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border border-gray-300 rounded-md py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-semibold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-md font-bold text-lg transition-colors duration-200 mb-4">
              Add to Cart
            </button>

            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-4 rounded-md font-bold text-lg transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Description</h2>
          <div className="text-gray-700 space-y-4 whitespace-pre-wrap">
            {product.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold mx-auto"
          >
            <FaArrowLeft /> Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}