import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEMS_IMAGE_URL } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";

const ResMenu = () => {
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
  console.log(itemsFilter, itemsFilter.length);
  return (
    <div className="main-div">
      <div className="card1">
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>
          {areaName}
          {sla?.lastMileTravelString ? ", " + sla.lastMileTravelString : ""}
        </p>
        <div className="d-time">
          <p>{sla?.minDeliveryTime}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <div className="card2"></div>
      <div className="card3">
        {itemsFilter?.map((item, i) => (
          <div key={item?.card?.info?.id}>
            <h3>{item?.card?.card?.title}</h3>
            <div>
              {item?.card?.card?.itemCards?.map((item1, i) => (
                <div className="container">
                  <div className="div-1">
                    <div className="type-of-food-icon"></div>
                    <h4>{item1?.card?.info?.name}</h4>
                    <p>
                      Rs.
                      {item1?.card?.info?.defaultPrice / 100 ||
                        item1?.card?.info?.finalPrice / 100 ||
                        item1?.card?.info?.price / 100}
                    </p>
                    <p>{item1?.card?.info?.description}</p>
                  </div>
                  <div className="div-2">
                    {item1?.card?.info?.imageId && (
                      <img
                        src={ITEMS_IMAGE_URL + item1.card.info.imageId}
                        alt="Item Image"
                      />
                    )}
                  </div>
                </div>
              )) ||
                item?.card?.card?.categories?.map((cat, i) => (
                  <div>
                    <div>{cat.title}</div>
                    {cat?.itemCards?.map((itemCard) => (
                      <div className="container">
                        <div className="div-1">
                          <div className="type-of-food-icon"></div>
                          <h4>{itemCard?.card?.info?.name}</h4>
                          <p>
                            Rs.
                            {itemCard?.card?.info?.defaultPrice / 100 ||
                              itemCard?.card?.info?.finalPrice / 100 ||
                              itemCard?.card?.info?.price / 100}
                          </p>
                          <p>{itemCard?.card?.info?.description}</p>
                        </div>
                        <div className="div-2">
                          {itemCard?.card?.info?.imageId && (
                            <img
                              src={ITEMS_IMAGE_URL + itemCard.card.info.imageId}
                              alt="Item Image"
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResMenu;
