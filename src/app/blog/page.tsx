import { Header } from "@/common/Header";
import { Footer } from "@/common/Footer";

export const metadata = {
  title: "Blog | Homentry",
  description: "Read our latest articles about kitchen organization and storage tips",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-gradient-to-b from-primary-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Kitchen Tips & Storage Ideas
            </h1>
            <p className="text-neutral-600 text-lg max-w-2xl">
              Discover practical advice and innovative solutions for organizing your kitchen and making the most of your storage space.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog cards will go here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-900 mb-2">
                  Coming Soon
                </h2>
                <p className="text-neutral-600 mb-4">
                  Check back soon for helpful articles about kitchen organization, storage solutions, and cooking tips.
                </p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
