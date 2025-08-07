import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../CommonCard/Card";
import { motion } from "framer-motion";
import ButtonNavigation from "../ButtonNavigation";
import PageBreadcrumb from "../CommanComponent/PageBreadcrumb";

const FullMenuPage = () => {
  const location = useLocation();
  const { selectedCategory = null, showTabs = true } = location.state || {};
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  useEffect(() => {
    if (!activeCategory && location.state?.categories?.length > 0) {
      setActiveCategory(location.state.categories[0]);
    }
  }, [activeCategory, location.state]);

  return (
    <div>
      {/* Navigation bar */}
      <PageBreadcrumb pageTitle="Category" />

      {showTabs && (
        <ButtonNavigation
          categories={location.state?.categories || []}
          activeId={activeCategory?._id}
          onCategoryClick={setActiveCategory}
        />
      )}

      <h1 className="text-center text-3xl font-bold mt-8 capitalize">
        All {activeCategory?.name || "Category"}
      </h1>

      <div className="container mx-auto px-4 py-8">
        {activeCategory?.items?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCategory.items.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
        ) : (
          <div className="text-center text-gray-500 py-10">No items found.</div>
        )}
      </div>
    </div>
  );
};

export default FullMenuPage;
