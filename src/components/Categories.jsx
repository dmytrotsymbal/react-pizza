import { useState } from "react";

const Categories = ({ setFilterCategory }) => {
  const categoriesArr = [
    "All",
    "Meat",
    "Vegetarian",
    "Grill",
    "Spicy",
    "Dessert",
  ];
  const [activeCategory, setActiveCategory] = useState(0);

  const onClickCategory = (index) => {
    setFilterCategory(index);
    setActiveCategory(index);
    console.log(index);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((category, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
