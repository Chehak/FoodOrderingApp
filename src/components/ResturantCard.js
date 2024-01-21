import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resObj } = props;
  // console.log(resObj);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj?.info;
  return (
    <div className="cards-container mx-0 my-auto ">
      <div className="w-[220px] relative bg-gray-100 m-1 rounded-lg hover:bg-slate-200 p-[4px] h-auto">
        <div
          className="bg-cover h-52 rounded-lg  m-2"
          style={{ backgroundImage: `url(${CDN_URL + cloudinaryImageId})` }}
        >
          <div className="absolute bg-slate-300 max-w-14 px-1 py-1 text-xs right-[3%] bottom-[6%] rounded-md">
            {resObj?.info?.sla?.slaString}
          </div>
        </div>
        <div className="card-description m-2 pb-3">
          <div className="about-place">
            <div className="place">
              <p className="font-bold">{name}</p>
              <p className="text-sm">{cuisines.join(", ")}</p>
            </div>
            <div className="place-review">
              <p className="text-sm">{avgRating}&#x2605;</p>
              <p className="text-sm">{costForTwo}</p>
              <p>{loggedInUser}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    console.log(props, "here we go");
    return (
      <div>
        <label className="absolute z-50 bg-slate-950 text-white px-2 py-[2px] rounded-lg text-sm">
          {props.isOpen ? "Open" : "Closed"}
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
