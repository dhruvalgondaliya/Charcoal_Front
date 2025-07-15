import { motion } from "framer-motion";
import burgers1 from "../../assets/burgers1.png";
import burgers2 from "../../assets/burgers2.png";
import burgers3 from "../../assets/burgers3.png";
import burgers4 from "../../assets/burgers4.png";
import Card from "../CommonCard/Card";

function Burger() {
  const Burger = [
    {
      id: 1,
      title: "Beef Burger",
      oldPrice: "Regular($12.99)",
      price: "$12.99",
      image: burgers1,
    },
    {
      id: 2,
      title: "Chicken Schnitzel Burger",
      oldPrice: "Regular($12.99)",
      price: "$12.99",
      image: burgers2,
    },
    {
      id: 3,
      title: "Fish Burger",
      oldPrice: "Regular($12.99)",
      price: "$12.99",
      image: burgers3,
    },
    {
      id: 4,
      title: "Veg Burger",
      oldPrice: "Regular($12.99)",
      price: "$12.99",
      image: burgers4,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center lg:mt-12 mb-3 md:mt-7 mt-10 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)]  capitalize">
        burgers
      </h1>

      <p className="inter text-center text-sm sm:text-base md:text-lg text-[var(--color-black)] pb-2 capitalize">
        All Burgers comes with, lettuce, cheese tomato, onion & special burger
        sauce
      </p>

      <div className="container mx-auto p-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
       gap-x-6 gap-y-8 justify-items-center"
        >
          {Burger.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                delay: index * 0.1,
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

export default Burger;
