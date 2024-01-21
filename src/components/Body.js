import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantList from "../utils/useResturantsList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const filteredlistOfResturants = useResturantList();
  const PromotedCard = withPromotedLabel(ResturantCard);

  console.log(filteredlistOfResturants);
  if (onlineStatus === false) {
    return (
      <h3>
        Looks like you are offline , Please check your internet connection !
      </h3>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);
  return filteredlistOfResturants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="flex relative">
          <input
            className="px-3 py-1 rounded-lg border border-solid border-orange-500 focus:border-orange-500"
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
            className="bg-orange-500 rounded-lg text-white px-2 py-1 absolute right-0 border border-solid border-orange-500 "
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
            className="bg-orange-500 text-white rounded-lg px-3 py-1"
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

        <input
          className="px-3 py-1 rounded-lg border border-solid border-orange-500 focus:border-orange-500"
          type="search"
          placeholder="Set username"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="res-container flex flex-wrap gap-3 justify-around">
        {filteredlistOfResturants?.map((res) => (
          <Link to={"resturants/" + res.info.id} key={res.info.id}>
            {res?.info?.isOpen ? (
              <PromotedCard resObj={res} isOpen={true} />
            ) : (
              <ResturantCard resObj={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
