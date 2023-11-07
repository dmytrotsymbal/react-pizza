import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaListItem/Skeleton";
import PizzaListItem from "../components/PizzaListItem";

import { useEffect, useState } from "react";

const Home = ({ searchValue }) => {
  const [pizzasArr, setPizzasArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState(0);
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://65244592ea560a22a4e9adbe.mockapi.io/items?sortBy=${sortBy}&category=${
        filterCategory > 0 ? filterCategory : ``
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzasArr(arr);
        setIsLoading(false);
      });
  }, [filterCategory, sortBy]);

  const skeleton = [...new Array(12)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories setFilterCategory={setFilterCategory} />
        <Sort setSortBy={setSortBy} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? skeleton
          : pizzasArr
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj) => (
                <PizzaListItem
                  key={obj.id}
                  imageUrl={obj.imageUrl}
                  title={obj.title}
                  types={obj.types}
                  sizes={obj.sizes}
                  price={obj.price}
                  category={obj.category}
                  rating={obj.rating}
                />
              ))}
      </div>
    </div>
  );
};
export default Home;

// https://65244592ea560a22a4e9adbe.mockapi.io/items
