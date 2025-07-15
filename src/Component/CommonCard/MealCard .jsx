
const MealCard = ({ title, price }) => {
  return (
    <div className="mealCard bg-white shadow-lg rounded-xl px-8 py-7 text-center  ">
      <h3 className="potlin text-md font-bold text-lg text-[var(--color-family)] leading-snug pt-2">{title}</h3>
      <p className="potlin text-lg font-bold mt-2 text-[var(--color-family)]">${price}</p>
    </div>
  );
};

export default MealCard;
