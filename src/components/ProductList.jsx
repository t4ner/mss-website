import { useState, useEffect } from "react";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Rod Breakdown Line");

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
      image: "/services/services1.jpg",
      category: "Rod Breakdown Line",
    },
    {
      title: "Insulation – Sheathing – Tandem Extrusion Lines",
      description:
        "Our extrusion lines provide reliable insulation and sheathing of cables to meet the highest quality standards.",
      specs: "Capacity up to 500 kg, processing speed up to 100 m/min.",
      images: ["/services/services2.jpg", "/services/services2-2.jpg", "/services/services2-3.jpg"],
      category: "Insulation & Sheathing Lines",
    },
    {
      title: "Stranding and Armoring Lines (Drum Twister)",
      description:
        "These machines enable precise stranding and armoring of cables while maintaining high production speed.",
      specs: "Stranding speed up to 200 m/min, armoring thickness up to 5 mm.",
      images: ["/services/services3.jpg", "/services/services3-2.jpg"],
      category: "Stranding and Armoring Lines",
    },
    {
      title: "Central Strander Machine (Bakır 07)",
      description:
        "A central stranding machine known for its reliability and precision, ensuring uniform stranding.",
      specs:
        "Stranding speed up to 180 m/min, maximum stranding capacity up to 1000 kg.",
      images: ["/services/services4.jpg", "/services/services4-2.jpg"],
      category: "Central Strander Machine",
    },
    {
      title: "Central Steel Wire Armoring Machine (Çelik 08)",
      description:
        "Specifically designed for the armoring of steel wires, offering a robust and durable solution.",
      specs:
        "Armoring speed up to 150 m/min, maximum armoring thickness up to 8 mm.",
      images: ["/services/services5.jpg", "/services/services5-2.jpg"],
      category: "Steel Wire Armoring Machine",
    },
    {
      title: "Multi Central Stranding Line (MultiStrander 10)",
      description:
        "A versatile stranding machine that combines multiple stranding processes in a single line to maximize efficiency.",
      specs:
        "Stranding speed up to 250 m/min, maximum stranding capacity up to 1500 kg.",
      images: ["/services/services6.jpg", "/services/services6-2.jpg"],
      category: "Multi Central Stranding Line",
    },
    {
      title: "Mica Taping Line",
      description:
        "These machines are designed for the precise taping of cables with mica tape to provide an additional layer of insulation.",
      specs:
        "Taping speed up to 120 m/min, maximum taping thickness up to 2 mm.",
      image: "/services/services7.jpg",
      category: "Mica Taping Line",
    },
    {
      title: "Rewinding Line",
      description:
        "Ensures uniform and precise rewinding of cables to improve product quality.",
      specs:
        "Rewinding speed up to 100 m/min, maximum rewinding capacity up to 500 kg.",
      images: ["/services/services8.jpg", "/services/services8-2.jpg"],
      category: "Rewinding Line",
    },
    {
      title: "Horizontal Taping Line",
      description:
        "Provides horizontal taping of cables for uniform and precise taping.",
      specs:
        "Taping speed up to 150 m/min, maximum taping thickness up to 3 mm.",
      image: "/services/services9.jpg",
      category: "Horizontal Taping Line",
    },
    {
      title: "CV Line Machines",
      description:
        "Offers reliable and precise processing of cables to meet the highest quality standards.",
      specs:
        "Processing speed up to 200 m/min, maximum processing capacity up to 1000 kg.",

      category: "CV Line Machines",
    },
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  useEffect(() => {
    const initialIndexes = products.reduce((acc, product, idx) => {
      acc[idx] = 0;
      return acc;
    }, {});
    setCurrentImageIndexes(initialIndexes);
  }, []);

  const nextImage = (productIndex, imagesLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] + 1) % imagesLength,
    }));
  };

  const prevImage = (productIndex, imagesLength) => {
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [productIndex]: (prev[productIndex] - 1 + imagesLength) % imagesLength,
    }));
  };

  return (
    <div className="container flex gap-8">
      {/* Sidebar */}
      <div className="w-[30%] flex-shrink-0 bg-gray-50 p-5 rounded-lg">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-lg text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                  selectedCategory === category
                    ? "bg-gray-200 text-[#0C4A79]"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
                <span className="text-3xl">  » </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex items-center justify-center flex-1 w-full  gap-8 bg-gray-50 p-6 rounded-lg">
        {products
          .filter(
            (product) =>
              !selectedCategory || product.category === selectedCategory
          )
          .map((product, index) => (
            <div key={index} className="grou w-full h-full">
              <div className="flex flex-col w-full h-full bg-white/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative w-full flex justify-center bg-gray-100">
                  <div className="relative w-full">
                    <img
                      src={
                        Array.isArray(product.images)
                          ? product.images[currentImageIndexes[index] || 0]
                          : product.image
                      }
                      alt={product.title}
                      className="w-auto h-[400px] object-contain mx-auto"
                    />

                    {Array.isArray(product.images) &&
                      product.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              prevImage(index, product.images.length);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0C4A79]/80 hover:bg-[#0C4A79] text-white p-2 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              nextImage(index, product.images.length);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0C4A79]/80 hover:bg-[#0C4A79] text-white p-2 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {product.images.map((_, dotIndex) => (
                              <button
                                key={dotIndex}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentImageIndexes((prev) => ({
                                    ...prev,
                                    [index]: dotIndex,
                                  }));
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  currentImageIndexes[index] === dotIndex
                                    ? "bg-white scale-125"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-xl font-krona font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="prose prose-gray">
                      <p className="text-gray-600 text-lg">
                        {product.description}
                      </p>
                    </div>

                    {product.specs && (
                      <div className="border-l-4 border-[#0C4A79] pl-4">
                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                          Specifications
                        </div>
                        <div className="text-gray-700 text-lg">
                          {product.specs}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
