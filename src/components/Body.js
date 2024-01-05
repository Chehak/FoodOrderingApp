import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListofResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7392736&lng=76.70912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofResturants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfResturants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="buttons-div">
        <div className="search-button">
          <input type="search" placeholder="Search Resturant" />
        </div>
        <div className="filter-button">
          <button
            type="button"
            className="btn-rating"
            onClick={() => {
              const filterList = listOfResturants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListofResturants(filterList);
            }}
          >
            Top rating Resturants
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfResturants.map((res) => (
          <ResturantCard resObj={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
