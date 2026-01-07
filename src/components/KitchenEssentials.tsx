const KitchenEssentials = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-500">Kitchen Essentials</h2>
        <p className="text-neutral-600 mt-2">Everything you need for a perfect cooking experience</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <div className="text-4xl mb-4">🍳</div>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Cookware</h3>
          <p className="text-neutral-600 text-sm">
            High-quality pots, pans, and utensils for every cooking need.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <div className="text-4xl mb-4">🔪</div>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Cutlery</h3>
          <p className="text-neutral-600 text-sm">
            Sharp, durable knives and kitchen tools for precision cutting.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <div className="text-4xl mb-4">🥄</div>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Utensils</h3>
          <p className="text-neutral-600 text-sm">
            Essential mixing, measuring, and serving tools.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
          <div className="text-4xl mb-4">🧽</div>
          <h3 className="text-lg font-semibold text-primary-700 mb-2">Cleaning Supplies</h3>
          <p className="text-neutral-600 text-sm">
            Keep your kitchen spotless with our cleaning essentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenEssentials;