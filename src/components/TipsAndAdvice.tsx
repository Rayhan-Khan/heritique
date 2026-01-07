const TipsAndAdvice = () => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary-500">Tips & Advice</h2>
        <p className="text-neutral-600 mt-2">Expert tips to enhance your cooking and kitchen experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-primary-700 mb-3">Kitchen Organization</h3>
          <ul className="text-neutral-600 space-y-2">
            <li>• Use clear containers for better visibility</li>
            <li>• Label everything to avoid confusion</li>
            <li>• Implement the "first in, first out" rule</li>
            <li>• Regular decluttering prevents buildup</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-primary-700 mb-3">Cooking Tips</h3>
          <ul className="text-neutral-600 space-y-2">
            <li>• Preheat your pans for better searing</li>
            <li>• Use room temperature ingredients</li>
            <li>• Taste as you go and adjust seasoning</li>
            <li>• Rest meat before cutting for juicier results</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-primary-700 mb-3">Food Safety</h3>
          <ul className="text-neutral-600 space-y-2">
            <li>• Wash hands before handling food</li>
            <li>• Keep raw and cooked foods separate</li>
            <li>• Use a food thermometer for accuracy</li>
            <li>• Refrigerate leftovers within 2 hours</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-primary-700 mb-3">Sustainability</h3>
          <ul className="text-neutral-600 space-y-2">
            <li>• Reduce food waste with proper planning</li>
            <li>• Choose reusable over disposable items</li>
            <li>• Compost food scraps when possible</li>
            <li>• Buy local and seasonal produce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TipsAndAdvice;