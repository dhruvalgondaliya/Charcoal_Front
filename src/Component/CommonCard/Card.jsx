import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  QuarterPrice,
  WholePrice,
  oldPrice,
  price,
  image,
}) => (
  <div className="bg-[var(--color-white)] rounded-xl shadow-md overflow-hidden w-full max-w-xs flex flex-col h-full">
    {/* Image */}
    <div className="overflow-hidden rounded-t-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-grow justify-between">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="potlin text-xl sm:text-2xl font-bold text-[var(--color-family)] capitalize">
          {title}
        </h2>

        {description && (
          <p className="potlin text-[var(--color-family)] text-base opacity-75">
            {description}
          </p>
        )}

        {QuarterPrice && (
          <p className="potlin font-bold text-[var(--color-family)] opacity-50">
            Regular :${QuarterPrice}
          </p>
        )}

        {WholePrice && (
          <p className="potlin font-bold text-[var(--color-family)] opacity-50">
            Whole: {WholePrice}
          </p>
        )}

        {oldPrice && (
          <p className="potlin font-bold text-[var(--color-family)] opacity-50">
            {oldPrice}
          </p>
        )}
      </div>
      {price && (
        <p className="potlin text-center text-lg font-bold text-[var(--color-family)] mt-4">
          ${price}
        </p>
      )}
      <div className="flex justify-center mt-2">
        <Link
          to="/cart"
          className="w-[130px] bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer"
        >
          Add To Cart
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
