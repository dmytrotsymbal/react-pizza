import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaListItem/Skeleton";
import PizzaListItem from "../components/PizzaListItem";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  const [pizzasArr, setPizzasArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState(0);
  const [sortBy, setSortBy] = useState("rating");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const category = filterCategory > 0 ? `&category=${filterCategory}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    fetch(
      `https://65244592ea560a22a4e9adbe.mockapi.io/items?${search}&page=${page}&limit=8&sortBy=${sortBy}${category}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzasArr(arr);
        setIsLoading(false);
      });
  }, [filterCategory, sortBy, searchValue, page]);

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
          : pizzasArr.map((obj) => (
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

      <Pagination setPage={setPage} />
    </div>
  );
};
export default Home;

// https://65244592ea560a22a4e9adbe.mockapi.io/items
