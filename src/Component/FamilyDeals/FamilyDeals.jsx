import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "../CommonCard/Card";
import ButtonNavigation from "../ButtonNavigation";
import CardLoading from "../CommanComponent/CardLoading";
import { ArrowRight } from "lucide-react";

const FamilyDeals = ({ categories, loading, error, limit = 4, onView }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (categories?.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  if (error)
    return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <div>
      <ButtonNavigation
        categories={categories}
        activeId={activeCategory?._id}
        onCategoryClick={setActiveCategory}
      />

      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(limit)].map((_, i) => (
              <CardLoading key={i} />
            ))}
          </div>
        ) : activeCategory?.items?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeCategory.items.slice(0, limit).map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <Card
                    title={item.name}
                    image={`http://localhost:8000${item.imageUrl}`}
                    description={item.description}
                    QuarterPrice={item.RegularPrice}
                    price={item.basePrice}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => onView(activeCategory)}
                className="relative group overflow-hidden w-full max-w-xs sm:w-49 px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-white text-black z-10 transition-all"
              >
                {/* Text + Icon */}
                <span className="relative z-20 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                  View All
                  <ArrowRight className="w-5 h-5" />
                </span>

                <span className="absolute bottom-0 left-0 w-full h-0 bg-[var(--color-primary-hover)] rounded-full z-10 group-hover:h-full transition-all duration-300 ease-in-out"></span>
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 py-10">No items found.</div>
        )}
      </div>
    </div>
  );
};

export default FamilyDeals;
