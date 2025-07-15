import axios from "axios";
import { useEffect, useState } from "react";
import ButtonNavigation from "../ButtonNavigation";
import Card from "../CommonCard/Card";
import { API_URL } from "../Server/Server";

const CategoryPage = () => {
  const [_, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const getMenu = async () => {
      const res = await axios.get(`${API_URL}menu/getAllMenu`);
      setMenuData(res.data.data);

      const allCats = res.data.data.flatMap((menu) => menu.categories);
      setCategories(allCats);
      if (allCats.length > 0) setActiveCategory(allCats[0]);
    };
    getMenu();
  }, []);

  return (
    <div>
      <ButtonNavigation
        categories={categories || []}
        activeId={activeCategory?._id}
        onCategoryClick={setActiveCategory}
      />

      {/* Render item cards */}
      <h1 className="potlin text-center lg:mt-12 mb-3 md:mt-7 mt-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] pb-2 capitalize">
        Family deals
      </h1>

      <div className="container mx-auto p-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
             gap-x-6 gap-y-8 justify-items-center"
        >
          {activeCategory?.items?.map((item) => (
            <div key={item._id} className="rounded-xl mt-3">
              <Card
                image={item.imageUrl}
                title={item.name}
                oldPrice={item.description}
                QuarterPrice={item.QuarterPrice}
                price={item.basePrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
