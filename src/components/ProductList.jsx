import { useState } from "react";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Rod Breakdown Line",
    "Insulation & Sheathing Lines",
    "Stranding and Armoring Lines",
    "Central Strander Machine",
    "Steel Wire Armoring Machine",
    "Multi Central Stranding Line",
    "Mica Taping Line",
    "Rewinding Line",
    "Horizontal Taping Line",
    "CV Line Machines",
  ];

  const products = [
    {
      title: "Rod Breakdown Line",
      description:
        "These machines are designed for the efficient breakdown of rods, ensuring uniform and precise processing.",
      image: "/images/rod-breakdown.jpg",
      category: "Rod Breakdown Line",
    },
    {
      title: "Insulation – Sheathing – Tandem Extrusion Lines",
      description:
        "Our extrusion lines provide reliable insulation and sheathing of cables to meet the highest quality standards.",
      specs: "Capacity up to 500 kg, processing speed up to 100 m/min.",
      image: "/images/insulation-sheathing.jpg",
      category: "Insulation & Sheathing Lines",
    },
    {
      title: "Stranding and Armoring Lines (Drum Twister)",
      description:
        "These machines enable precise stranding and armoring of cables while maintaining high production speed.",
      specs: "Stranding speed up to 200 m/min, armoring thickness up to 5 mm.",
      image: "/images/stranding-armoring.jpg",
      category: "Stranding and Armoring Lines",
    },
    {
      title: "Central Strander Machine (Bakır 07)",
      description:
        "A central stranding machine known for its reliability and precision, ensuring uniform stranding.",
      specs:
        "Stranding speed up to 180 m/min, maximum stranding capacity up to 1000 kg.",
      image: "/images/central-strander.jpg",
      category: "Central Strander Machine",
    },
    {
      title: "Central Steel Wire Armoring Machine (Çelik 08)",
      description:
        "Specifically designed for the armoring of steel wires, offering a robust and durable solution.",
      specs:
        "Armoring speed up to 150 m/min, maximum armoring thickness up to 8 mm.",
      image: "/images/steel-wire-armoring.jpg",
      category: "Steel Wire Armoring Machine",
    },
    {
      title: "Multi Central Stranding Line (MultiStrander 10)",
      description:
        "A versatile stranding machine that combines multiple stranding processes in a single line to maximize efficiency.",
      specs:
        "Stranding speed up to 250 m/min, maximum stranding capacity up to 1500 kg.",
      image: "/images/multi-central-stranding.jpg",
      category: "Multi Central Stranding Line",
    },
    {
      title: "Mica Taping Line",
      description:
        "These machines are designed for the precise taping of cables with mica tape to provide an additional layer of insulation.",
      specs:
        "Taping speed up to 120 m/min, maximum taping thickness up to 2 mm.",
      image: "/images/mica-taping.jpg",
      category: "Mica Taping Line",
    },
    {
      title: "Rewinding Line",
      description:
        "Ensures uniform and precise rewinding of cables to improve product quality.",
      specs:
        "Rewinding speed up to 100 m/min, maximum rewinding capacity up to 500 kg.",
      image: "/images/rewinding.jpg",
      category: "Rewinding Line",
    },
    {
      title: "Horizontal Taping Line",
      description:
        "Provides horizontal taping of cables for uniform and precise taping.",
      specs:
        "Taping speed up to 150 m/min, maximum taping thickness up to 3 mm.",
      image: "/images/horizontal-taping.jpg",
      category: "Horizontal Taping Line",
    },
    {
      title: "CV Line Machines",
      description:
        "Offers reliable and precise processing of cables to meet the highest quality standards.",
      specs:
        "Processing speed up to 200 m/min, maximum processing capacity up to 1000 kg.",
      image: "/images/cv-line.jpg",
      category: "CV Line Machines",
    },
  ];

  return (
    <div className="container flex gap-8">
      {/* Sidebar */}
      <div className="w-1/4 flex-shrink-0 bg-blue-500">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                  selectedCategory === category
                    ? "bg-red-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
                <span className="text-xl">+</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-500">
        {products
          .filter(
            (product) =>
              !selectedCategory || product.category === selectedCategory
          )
          .map((product, index) => (
            <div key={index} className="group">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  {product.specs && (
                    <p className="text-sm text-blue-600 italic">
                      {product.specs}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
