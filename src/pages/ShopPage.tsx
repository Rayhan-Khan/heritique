import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const selectStyles = `
  .custom-select {
    accent-color: #f5ea1b;
  }
  
  .custom-select option:checked {
    background: linear-gradient(#f5ea1b, #f5ea1b);
    background-color: #f5ea1b !important;
    color: #333 !important;
  }
  
  .custom-select option:checked:hover {
    background: linear-gradient(#e6db0c, #e6db0c);
    background-color: #e6db0c !important;
  }
  
  .custom-select option {
    background-color: white;
    color: #333;
  }
`;

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

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'popularity' | 'rating';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [minRating, setMinRating] = useState<number>(0);
  const [minPopularity, setMinPopularity] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // 3 columns x 4 rows

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/productsData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Set initial price range based on actual products
        if (data.length > 0) {
          const prices = data.map(p => p.price);
          const maxPrice = Math.max(...prices);
          setPriceRange([0, maxPrice]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply price filter
    result = result.filter(p => {
      const discountedPrice = p.price - (p.price * p.discount / 100);
      return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1];
    });

    // Apply rating filter
    result = result.filter(p => p.rating >= minRating);

    // Apply popularity filter
    result = result.filter(p => p.popularity >= minPopularity);

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => {
          const priceA = a.price - (a.price * a.discount / 100);
          const priceB = b.price - (b.price * b.discount / 100);
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        result.sort((a, b) => {
          const priceA = a.price - (a.price * a.discount / 100);
          const priceB = b.price - (b.price * b.discount / 100);
          return priceB - priceA;
        });
        break;
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (by productId)
        result.sort((a, b) => a.productId - b.productId);
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, sortOption, priceRange, minRating, minPopularity]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{selectStyles}</style>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Shop</span>
        </div>

        {/* Page Title and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Shop</h1>
            <p className="text-gray-600">
              Showing {startIndex + 1}–{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} results
            </p>
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="custom-select px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f5ea1b] bg-white min-w-[200px]"
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="price-asc">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#f5ea1b] hover:bg-[#e6db0c] text-gray-900 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 lg:top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close filters"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Min: ${(priceRange[0] / 100).toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={Math.max(...products.map(p => p.price))}
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Max: ${(priceRange[1] / 100).toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={Math.max(...products.map(p => p.price))}
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Rating</h3>
                <div className="space-y-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={(e) => setMinRating(parseInt(e.target.value))}
                        className="text-yellow-400 focus:ring-yellow-400"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Popularity Filter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Minimum Reviews</h3>
                <div className="space-y-2">
                  {[0, 50, 100, 200].map((pop) => (
                    <label key={pop} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="popularity"
                        value={pop}
                        checked={minPopularity === pop}
                        onChange={(e) => setMinPopularity(parseInt(e.target.value))}
                        className="text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{pop}+ reviews</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters Button */}
              <button
                onClick={() => {
                  setSortOption('default');
                  setPriceRange([0, Math.max(...products.map(p => p.price))]);
                  setMinRating(0);
                  setMinPopularity(0);
                }}
                className="w-full mt-6 bg-[#f5ea1b] hover:bg-[#e6db0c] text-gray-900 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {currentProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.productId} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    {/* Previous Button */}
                    {currentPage > 1 && (
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        aria-label="Previous page"
                      >
                        ←
                      </button>
                    )}

                    {/* Page Numbers */}
                    {[...Array(totalPages)].map((_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 rounded transition-colors ${
                            currentPage === pageNumber
                              ? 'bg-yellow-400 text-gray-900 font-bold'
                              : 'border border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    {/* Next Button */}
                    {currentPage < totalPages && (
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        aria-label="Next page"
                      >
                        →
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}