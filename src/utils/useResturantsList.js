import { useEffect, useState } from "react";
import { RESTURANT_LIST_API } from "./constants";

const useResturantList = () => {
  const [listOfResturants, setListofResturants] = useState([]);
  const [filteredlistOfResturants, setFilteredListofResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_LIST_API);
    const json = await data.json();
    setListofResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListofResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchFunction = (searchArray) =>
    setFilteredListofResturants(searchArray);

  return filteredlistOfResturants;
};

export default useResturantList;
