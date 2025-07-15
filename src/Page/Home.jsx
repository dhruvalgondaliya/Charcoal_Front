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

function Home() {
  return (
    <>
      {/* Main Hero Component  */}
      <Testing />

      {/* Button Navigation Tab */}
      <ButtonNavigation />

      {/* FamilyDeals Component */}
      <FamilyDeals />

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
