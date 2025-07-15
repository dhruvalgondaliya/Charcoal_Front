import salads1 from "../../assets/salads1.png";
import salads2 from "../../assets/salads2.png";
import salads3 from "../../assets/salads3.Png";
import salads4 from "../../assets/salads4.png";
import salads5 from "../../assets/salads5.png";
import salads6 from "../../assets/salads6.png";
import Card from "../CommonCard/Card";
import { motion } from "framer-motion";

function Salads() {
  const Salad = [
    {
      id: 1,
      title: "Chicken Caesar Salad",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads1,
    },
    {
      id: 2,
      title: "Coleslaw",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads2,
    },
    {
      id: 3,
      title: "Seafood Salad",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads3,
    },
    {
      id: 4,
      title: "Potato Salad",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads4,
    },
    {
      id: 5,
      title: "Chicken Avocado Salad",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads5,
    },
    {
      id: 6,
      title: "Greek Salad",
      oldPrice: "SML($6.99)",
      QuarterPrice: "LRG($12.99)",
      price: "From $6.99",
      image: salads6,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center lg:mt-13 sm:mt-7 mt-10 mb-7 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] capitalize">
        salads
      </h1>

      <div className="container mx-auto px-4 py-4 mb-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
    gap-x-6 gap-y-8 place-items-center"
        >
          {Salad.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-xs"
            >
              <Card
                image={deal.image}
                title={deal.title}
                oldPrice={deal.oldPrice}
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

export default Salads;
