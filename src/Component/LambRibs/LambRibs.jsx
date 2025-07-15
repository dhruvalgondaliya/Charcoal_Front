import { motion } from "framer-motion";
import LambRibs1 from "../../assets/Lamb Ribs.png";
import Card from "../CommonCard/Card";

function LambRibs() {
  const LambRib = [
    {
      id: 1,
      title: "Rack of Ribs",
      oldPrice: "Half($21.99)",
      QuarterPrice: "Full($26.99)",
      price: "From $21.99",
      image: LambRibs1,
    },
  ];

  return (
    <>
      <h1 className="potlin text-center lg:mt-12 md:mt-7 mt-5 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-family)] mb-4 capitalize">
        lamb ribs
      </h1>

      <div className="container mx-auto p-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1
       gap-x-6 gap-y-8 justify-items-center"
        >
          {LambRib.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120, 
                damping: 15, 
                delay: index * 0.15,
              }}
              viewport={{ once: true, amount: 0.2 }}
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

export default LambRibs;
