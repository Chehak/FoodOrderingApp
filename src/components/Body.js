import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantList from "../utils/useResturantsList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const filteredlistOfResturants = useResturantList();

  if (onlineStatus === false) {
    return (
      <h3>
        Looks like you are offline , Please check your internet connection !
      </h3>
    );
  }

  return filteredlistOfResturants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="buttons-div">
        <div className="search-button">
          <input
            type="search"
            placeholder="Search Resturant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              searchFunction(listOfResturants);
            }}
          />
          <button
            type="button"
            className="name-search"
            onClick={() => {
              const filtererdRes = listOfResturants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              searchFunction(filtererdRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-button">
          <button
            type="button"
            className="btn-rating"
            onClick={() => {
              const filterList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              searchFunction(filterList);
            }}
          >
            Top rating Resturants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredlistOfResturants?.map((res) => (
          <Link to={"resturants/" + res.info.id} key={res.info.id}>
            <ResturantCard resObj={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
