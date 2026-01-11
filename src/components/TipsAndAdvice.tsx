import { Link } from 'react-router-dom';

interface TipCard {
  id: number;
  title: string;
  image: string;
}

const TipsAndAdvice = () => {
  const tips: TipCard[] = [
    {
      id: 1,
      title: "How Organizing Your Kitchen Boosts Productivity and Mood",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Choosing the Right Storage Jars",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600"
    },
    {
      id: 3,
      title: "How to Keep Pantry Items Fresh Longer",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600"
    }
  ];

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">Tips & Advices</h2>
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

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {tips.map((tip) => (
          <Link
            key={tip.id}
            to="/shop"
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#1e3a5f] transition-colors line-clamp-2">
                {tip.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Additional Tips Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-8 border border-blue-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-500 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kitchen Organization 101</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn the fundamentals of keeping your kitchen organized with smart storage solutions, proper labeling techniques, and decluttering strategies that actually work.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md p-8 border border-green-100">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-500 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Kitchen Practices</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover eco-friendly ways to reduce waste, choose reusable products, and create a more sustainable kitchen that's better for you and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsAndAdvice;