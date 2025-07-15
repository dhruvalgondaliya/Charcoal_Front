import { motion } from "framer-motion";
import Card from "../CommonCard/Card";
import Kebab1 from "../../assets/Kebab1.png";
import Kebab2 from "../../assets/Kebab2.png";
import Kebab3 from "../../assets/Kebab3.png";
import Kebab4 from "../../assets/Kebab4.png";
import Kebab5 from "../../assets/Kebab5.png";
import Kebab6 from "../../assets/Kebab6.png";
import Kebab7 from "../../assets/Kebab7.png";
import Kebab8 from "../../assets/Kebab8.png";

function Kebab() {
  const KebabMeals = [
    {
      id: 1,
      title: "Mixed Kebab",
      oldPrice: "Regular($14.99)",
      price: "$14.99",
      image: Kebab1,
    },
    {
      id: 2,
      title: "Chicken Kebab",
      oldPrice: "Regular($13.99)",
      price: "$13.99",
      image: Kebab2,
    },
    {
      id: 3,
      title: "Lamb Kebab",
      oldPrice: "Regular($14.99)",
      price: "$14.99",
      image: Kebab3,
    },
    {
      id: 4,
      title: "Falafal Kebab",
      oldPrice: "Regular($12.99)",
      price: "$12.99",
      image: Kebab4,
    },
    {
      id: 5,
      title: "Falafal Platter",
      oldPrice: "Regular($17.99)",
      price: "$17.99",
      image: Kebab5,
    },
    {
      id: 6,
      title: "Chicken Meat Box",
      oldPrice: "Regular($20.99)",
      price: "$20.99",
      image: Kebab6,
    },
    {
      id: 7,
      title: "Lamb Meat Box",
      oldPrice: "Regular($21.99)",
      price: "$21.99",
      image: Kebab7,
    },
    {
      id: 8,
      title: "Mixed Meat Box",
      oldPrice: "Regular($21.99)",
      price: "$21.99",
      image: Kebab8,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center mt-8 py-5 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] capitalize">
        Kebab & Meals
      </h1>

      <p className="inter text-center text-sm sm:text-base md:text-lg text-[var(--color-black)] pb-5 capitalize">
        All kebabs come with sakad (lettuce, tomato & onion) & 2 sauce
      </p>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
          {KebabMeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card
                image={deal.image}
                title={deal.title}
                oldPrice={deal.oldPrice}
                price={deal.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Kebab;
