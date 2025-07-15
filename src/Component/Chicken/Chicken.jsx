import { motion } from "framer-motion";
import Card from "../CommonCard/Card";
import Chicken1 from "../../assets/Chicken1.png";
import Chicken2 from "../../assets/Chicken2.png";

function Chicken() {
  const ChickenItems = [
    {
      id: 1,
      title: "Lemon, Herbs & Garlic Chicken",
      QuarterPrice: "Quarter($9.99)",
      oldPrice: "Half($13.99)",
      price: "From $9.99",
      image: Chicken2,
    },
    {
      id: 2,
      title: "Portuguese Chicken",
      QuarterPrice: "Quarter($9.99)",
      oldPrice: "Half($13.99)",
      WholePrice: "Whole($22.99)",
      price: "From $9.99",
      image: Chicken1,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center py-4 mt-6 mb-4  text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] capitalize">
        Chicken
      </h1>

      <div className="container mx-auto p-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
             gap-x-6 gap-y-8 justify-items-center"
        >
          {ChickenItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: -100, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                image={item.image}
                title={item.title}
                QuarterPrice={item.QuarterPrice}
                oldPrice={item.oldPrice}
                price={item.price}
                WholePrice={item.WholePrice}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chicken;
