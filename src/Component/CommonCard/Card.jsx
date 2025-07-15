const Card = ({
  title,
  description,
  QuarterPrice,
  WholePrice,
  oldPrice,
  price,
  image,
}) => (
  <div className="bg-[var(--color-white)] rounded-xl shadow-md overflow-hidden w-full max-w-xs flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />

    <div className="p-4 flex flex-col flex-1 justify-between">
      <div>
        <h2 className="potlin text-xl sm:text-2xl font-bold text-center text-[var(--color-family)] capitalize mb-3">
          {title}
        </h2>

        {description && (
          <p className="potlin text-[var(--color-family)] text-base sm:text-base text-center opacity-75 mb-2">
            {description}
          </p>
        )}

        {QuarterPrice && (
          <p className="potlin text-center font-bold text-lg text-[var(--color-family)] opacity-50  pb-2">
            {QuarterPrice}
          </p>
        )}

        {WholePrice && (
          <p className="potlin text-center font-bold text-lg text-[var(--color-family)] opacity-50">
            {WholePrice}
          </p>
        )}

        {oldPrice && (
          <p className="potlin text-center font-bold text-lg text-[var(--color-family)] opacity-50">
            {oldPrice}
          </p>
        )}
      </div>

      {price && (
        <p className="potlin text-center text-lg font-bold text-[var(--color-family)] mt-3">
          Rs:{price }
        </p>
      )}
    </div>
  </div>
);

export default Card;
