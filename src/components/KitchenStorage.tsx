import { Link } from 'react-router-dom';

const KitchenStorage = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-primary-500">Kitchen Storage Solutions</h2>
        <Link
          to="/kitchen-storage"
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
        >
          Explore More
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🏺</div>
          <h3 className="text-xl font-semibold text-primary-700 mb-2">Storage Containers</h3>
          <p className="text-neutral-600">
            Keep your ingredients fresh and organized with our premium storage solutions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🗂️</div>
          <h3 className="text-xl font-semibold text-primary-700 mb-2">Pantry Organizers</h3>
          <p className="text-neutral-600">
            Maximize your pantry space with smart organization tools and dividers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🧊</div>
          <h3 className="text-xl font-semibold text-primary-700 mb-2">Refrigerator Storage</h3>
          <p className="text-neutral-600">
            Efficient fridge organization to reduce waste and save time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenStorage;