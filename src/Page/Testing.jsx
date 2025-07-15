import food from "../assets/Food.png";
import Pluse from "../assets/Pluse.png";
import badge from "../assets/badge.png";
import { motion } from "framer-motion";

function Testing() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-hero-pattern relative bg-cover bg-center bg-no-repeat  ">
        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen px-4 lg:py-20 md:py-19 ">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="text-center mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p
                className="potlin text-sm sm:text-3xl text-[var(--color-white)] lg:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Order Online - Pickup & Delivery
              </motion.p>

              <motion.h1
                className="text-center mb-6 leading-tight tracking-normal"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="main_header block text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white">
                  FRESH, GOURMET
                </span>
                <motion.span
                  className="block sm:mt-6"
                  initial={{ y: -10 }}
                  whileInView={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  <img
                    src={food}
                    alt="Food"
                    className="mx-auto w-auto h-[50px] sm:h-[60px] md:h-[80px] lg:w-[210px] lg:h-[150px] lg:-mt-16 sm:-mt-10"
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="potlin text-md sm:text-lg lg:text-2xl mb-6 font-bold text-[var(--color-white)] max-w-[90%] sm:max-w-2xl mx-auto leading-relaxed text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Looking for the best food in town? We combine fresh, gourmet
                flavours to create an authentic blend of tastes.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start mx-auto w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inter w-full sm:w-64 max-w-64 px-6 py-3 lg:w-3xs text-sm sm:text-base md:text-lg bg-[var(--color-primary)] text-white font-bold rounded-full transition"
                >
                  ORDER ONLINE
                </motion.button>

                <span className="inter text-white text-xl sm:pt-2">or</span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden w-full lg:w-3xs sm:w-64 max-w-64 inter px-6 py-3 text-sm sm:text-base md:text-lg bg-[var(--color-white)] text-black font-bold rounded-full transition-all z-10 group"
                >
                  <span className="relative z-20 group-hover:text-[var(--color-white)] transition-all duration-300">
                    SAVE10% GET OUR APP!
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-[var(--color-primary-hover)] transition-all duration-300 group-hover:h-full z-10 rounded-full"></span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Order Card */}
            <motion.div
              className="reactangel w-full max-w-md mx-auto rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Delivery Info */}
              <motion.div
                className="text-center text-[var(--color-dark)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <p className="potlin text-sm sm:text-base lg:text-xl font-medium opacity-75 pt-4">
                  Delivery in about 30 mins from
                </p>

                <h3 className="potlin text-lg sm:text-2xl lg:text-3xl font-bold my-2 break-words">
                  Smoky Charcoal Chicken
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-1 text-sm sm:text-base lg:text-2xl">
                  <span className="potlin">42 Mirrabooka Ave, Mirrabooka</span>
                  <button className="potlin text-red-500 font-semibold hover:underline">
                    Change
                  </button>
                </div>
              </motion.div>

              {/* Complete Order Button */}
              <motion.div
                className="mt-4 flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <button className="potlin w-64 sm:w-[240px] max-w-[320px] lg:w-3xs bg-[var(--color-red)] hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 text-sm sm:text-base lg:2xl">
                  Complete Order
                </button>
              </motion.div>

              {/* Rewards Section */}
              <motion.div
                className="space-y-4 mt-6 ml-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 20 }}
                  >
                    <img src={badge} alt="Badge Icon" className="w-5 h-5" />
                  </motion.div>
                  <span className="potlin text-[var(--color-dark)] text-sm sm:text-base lg:text-lg">
                    Login to redeem rewards
                  </span>
                </div>

                <div className="w-full border-b border-gray-300 pb-2">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: -20 }}
                    >
                      <img src={Pluse} alt="Pluse Icon" className="w-4 h-4" />
                    </motion.div>
                    <span className="potlin text-[var(--color-dark)] text-sm sm:text-base lg:text-lg">
                      Redeem a code
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="text-center py-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="inter text-sm text-gray-500">
                  There are no products in your order
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
