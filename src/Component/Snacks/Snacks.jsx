import Snacks1 from "../../assets/Snacks1.png";
import Snacks2 from "../../assets/Snacks2.png";
import Snacks3 from "../../assets/Snacks3.png";
import Snacks4 from "../../assets/Snacks4.png";
import Snacks5 from "../../assets/Snacks5.png";
import Card from "../CommonCard/Card";
import { motion } from "framer-motion";

function Snacks() {
  const Snacks = [
    {
      id: 1,
      title: "Kids Nuggets & Chips Pack",
      QuarterPrice: "Regular($8.99)",
      price: "$8.99",
      image: Snacks1,
    },
    {
      id: 2,
      title: "6 Nuggets Only",
      QuarterPrice: "Regular($6.99)",
      price: "$6.99",
      image: Snacks2,
    },
    {
      id: 3,
      title: "12 Nuggets Only",
      QuarterPrice: "Regular($11.99)",
      price: "$11.99",
      image: Snacks3,
    },
    {
      id: 4,
      title: "3 Chicken Strips",
      QuarterPrice: "Regular($8.99)",
      price: "$8.99",
      image: Snacks4,
    },
    {
      id: 5,
      title: "3 Chicken Strips & Chips Pack",
      QuarterPrice: "Regular($12.99)",
      price: "$12.99",
      image: Snacks5,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center lg:mt-14 sm:mt-7 mt-10 mb-7 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] capitalize">
        Snacks
      </h1>

      <div className="container mx-auto p-4 mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
          {Snacks.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-sm h-full"
            >
              <Card
                image={deal.image}
                title={deal.title}
                QuarterPrice={deal.QuarterPrice}
                price={deal.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Snacks;
