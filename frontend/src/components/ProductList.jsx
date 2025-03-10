import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(
    t("products.categories.0")
  );
  const productsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const categories = t("products.categories", { returnObjects: true });

  const products = t("products.productList", { returnObjects: true }).map(
    (product, index) => {
      // Add images from the original product data
      const originalImages = [
        "/services/services1.jpg",
        [
          "/services/services2.jpg",
          "/services/services2-2.jpg",
          "/services/services2-3.jpg",
        ],
        ["/services/services3.jpg", "/services/services3-2.jpg"],
        ["/services/services4.jpg", "/services/services4-2.jpg"],
        ["/services/services5.jpg", "/services/services5-2.jpg"],
        ["/services/services6.jpg", "/services/services6-2.jpg"],
        "/services/services7.jpg",
        ["/services/services8.jpg", "/services/services8-2.jpg"],
        "/services/services9.jpg",
        null,
      ];

      return {
        ...product,
        category: categories[index],
        image: Array.isArray(originalImages[index])
          ? undefined
          : originalImages[index],
        images: Array.isArray(originalImages[index])
          ? originalImages[index]
          : undefined,
      };
    }
  );

  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  useEffect(() => {
    const initialIndexes = products.reduce((acc, product, idx) => {
      acc[idx] = 0;
      return acc;
    }, {});
    setCurrentImageIndexes(initialIndexes);
  }, []);

  useEffect(() => {
    // Update selected category when language changes
    setSelectedCategory(t("products.categories.0"));
  }, [t]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the 'lg' breakpoint in Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    // Scroll to products with smooth behavior
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container flex flex-col lg:flex-row lg:gap-8">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:w-[30%] lg:flex-shrink-0 bg-gray-50 p-5 rounded-lg">
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-lg text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between ${
                  selectedCategory === category
                    ? "bg-gray-200 text-[#0C4A79]"
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
                <span className="text-3xl"> » </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div
        ref={productsRef}
        className="flex flex-col items-center justify-center flex-1 w-full gap-8 bg-gray-50 p-4 lg:p-6 rounded-lg"
      >
        {products
          .filter(
            (product) =>
              isMobile ||
              !selectedCategory ||
              product.category === selectedCategory
          )
          .map((product, index) => (
            <div key={index} className="group w-full h-full">
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
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0C4A79] hover:bg-[#0C4A79] text-white p-2 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 lg:h-8 lg:w-8"
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
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0C4A79] hover:bg-[#0C4A79] text-white p-2 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 lg:h-8 lg:w-8"
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
                    <h2 className="text-lg lg:text-xl font-krona font-bold text-gray-800 mb-3">
                      {product.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="prose prose-gray">
                      <p className="text-gray-600 text-sm lg:text-lg">
                        {product.description}
                      </p>
                    </div>

                    {product.specs && (
                      <div className="border-l-4 border-[#0C4A79] pl-4">
                        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                          {t("products.specifications")}
                        </div>
                        <div className="text-gray-700 text-sm lg:text-lg">
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
