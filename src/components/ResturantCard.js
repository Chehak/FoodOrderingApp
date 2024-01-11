import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resObj } = props;
  // console.log(resObj);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resObj?.info;
  return (
    <div className="cards-container">
      <div className="card">
        <div
          className="card-media"
          style={{ backgroundImage: `url(${CDN_URL + cloudinaryImageId})` }}
        >
          <div className="delivery-time">39 mins</div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines.join(", ")}</p>
            </div>
            <div className="place-review">
              <p className="rating">{avgRating}&#x2605;</p>
              <p className="per-person">{costForTwo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
