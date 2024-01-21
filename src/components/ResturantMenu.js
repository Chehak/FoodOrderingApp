import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResMenu = () => {
  const dummy = "Dummy Data";
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, areaName, sla, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const cardsInfo = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  const itemsFilter = cardsInfo.filter(
    (item) =>
      item?.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      item?.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  // console.log(itemsFilter);
  return (
    <div className=" w-6/12 m-auto">
      <div className="card1">
        <p className="font-bold text-2xl my-2 py-1">{name}</p>
        <p className="text-gray-500 text-[13px]">{cuisines.join(", ")}</p>
        <p className="text-gray-500 text-[13px] pb-2 border-b-2 border-dotted">
          {areaName}
          {sla?.lastMileTravelString ? ", " + sla.lastMileTravelString : ""}
        </p>

        <div className="flex gap-6 pt-2">
          <div className="flex justify-between items-center gap-2">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  strokeWidth="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
            </span>
            <p className="font-bold">{sla?.minDeliveryTime}</p>
          </div>

          <p className="font-bold text-base">{costForTwoMessage}</p>
        </div>
      </div>
      <div className="card3">
        {itemsFilter?.map((item, i) => (
          <ResturantCategory
            key={item?.card?.card?.title}
            cat={item}
            dummy={dummy}
            showItems={i == showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(i);
              console.log(showIndex, i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
