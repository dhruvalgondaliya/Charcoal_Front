const ButtonNavigation = ({ categories, activeId, onCategoryClick }) => {
  return (
    <nav className="sm:mt-30 mb-5">
      <div className="w-full bg-[var(--color-primary)]">
        <div className="container mx-auto px-4">
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide ml-4">
            {categories?.map((item) => (
              <button
                key={item._id}
                onClick={() => onCategoryClick(item)}
                className={`w-[109px] h-[45px]
              relative overflow-hidden whitespace-nowrap px-4 my-2 rounded-full font-semibold text-sm transition-all duration-300 flex-shrink-0 group
              ${
                activeId === item._id
                  ? "bg-[var(--color-red)] text-white shadow-lg"
                  : "bg-white text-black"
              }`}
              >
                <span className="relative z-20 group-hover:text-white text-sm transition-all duration-300">
                  {item.name}
                </span>

                {activeId !== item._id && (
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-[var(--color-red)] transition-all duration-300 group-hover:h-full z-10 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ButtonNavigation;
