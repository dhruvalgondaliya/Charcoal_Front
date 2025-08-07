import { useEffect, useState } from "react";
import ButtonNavigation from "../Component/ButtonNavigation";
import Chicken from "../Component/Chicken/Chicken";
import Combos from "../Component/Combos/Combos";
import Drinks from "../Component/CommonCard/Drinks";
import FamilyDeals from "../Component/FamilyDeals/FamilyDeals";
import Kebab from "../Component/Kebab/Kebab";
import LambRibs from "../Component/LambRibs/LambRibs";
import Salads from "../Component/Salads/Salads";
import Sides from "../Component/Sides/Sides";
import Snacks from "../Component/Snacks/Snacks";
import Burger from "../Component/burgers/burger";
import Testing from "./Testing";
import { useNavigate } from "react-router-dom";
import { fetchAllMenus } from "../Component/Api/MenuApi";

function Home() {
  const [menuData, setMenuData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // fetch Category items
  useEffect(() => {
    const CategoryItems = async () => {
      try {
        const data = await fetchAllMenus();
        setMenuData(data);

        setCategories(data.flatMap((m) => m.categories));
      } catch (err) {
        setError("Failed to Fetch Category Items");
      } finally {
        setLoading(false);
      }
    };
    CategoryItems();
  }, []);

  // button Routes
  const handleViewAll = (category) => {
    navigate("/detail-Items", {
      state: {
        selectedCategory: category,
        showTabs: false,
      },
    });
  };

  return (
    <>
      {/* Main Hero Component  */}
      <Testing />

      {/* Button Navigation Tab */}
      <ButtonNavigation />

      {/* FamilyDeals Component */}
      <FamilyDeals
        categories={categories}
        menuData={menuData}
        loading={loading}
        error={error}
        limit={4}
        onView={handleViewAll}
      />

      {/* Combos Component */}
      <Combos />

      {/* Kebab Component */}
      <Kebab />

      {/* Chicken Component */}
      <Chicken />

      {/* Burger Component */}
      <Burger />

      {/* LambRibs Component */}
      <LambRibs />

      {/* Salads Component */}
      <Salads />

      {/* Sides  component */}
      <Sides />

      {/* Snacks Component */}
      <Snacks />

      {/* Drinks Component*/}
      <Drinks />
    </>
  );
}

export default Home;
