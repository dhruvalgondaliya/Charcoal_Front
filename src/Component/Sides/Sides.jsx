import Sides1 from "../../assets/Sides1.png";
import Sides2 from "../../assets/Sides2.png";
import Sides3 from "../../assets/Sides3.png";
import Sides4 from "../../assets/Sides4.png";
import Sides5 from "../../assets/Sides5.png";
import Sides6 from "../../assets/Sides6.png";
import Sides7 from "../../assets/Sides7.png";
import Sides8 from "../../assets/Sides8.png";
import Card from "../CommonCard/Card";
import { motion } from "framer-motion";

function Sides() {
  const sides = [
    {
      id: 1,
      title: "Sauce",
      QuarterPrice: "Regular($14.99)",
      price: "$1.99",
      image: Sides1,
    },
    {
      id: 2,
      title: "Chips",
      QuarterPrice: "Regular($14.99)",
      price: "From $3.50",
      image: Sides2,
    },
    {
      id: 3,
      title: "Gravy",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: Sides3,
    },
    {
      id: 4,
      title: "Chips & Gravy",
      QuarterPrice: "Regular($12.99)",
      price: "From $7.99",
      image: Sides4,
    },
    {
      id: 5,
      title: "Peas",
      QuarterPrice: "Regular($17.99)",
      price: "From $3.99",
      image: Sides5,
    },
    {
      id: 6,
      title: "Cream Potatoes",
      QuarterPrice: "Regular($20.99)",
      price: "From $6.99",
      image: Sides6,
    },
    {
      id: 7,
      title: "Biryani Rice",
      QuarterPrice: "Regular($21.99)",
      price: "From $6.99",
      image: Sides7,
    },
    {
      id: 8,
      title: "Pita Bread",
      QuarterPrice: "LRG($21.99)",
      price: "From $2.99",
      image: Sides8,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center lg:mt-14 sm:mt-7 mt-10 mb-7 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] capitalize">
        sides
      </h1>

      <div className="container mx-auto p-4 mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 justify-items-center">
          {sides.map((deal, index) => (
            <div className="w-full max-w-sm" key={deal.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full"
              >
                <Card
                  image={deal.image}
                  title={deal.title}
                  oldPrice={deal.oldPrice}
                  QuarterPrice={deal.QuarterPrice}
                  price={deal.price}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sides;
