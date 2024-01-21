import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  console.log(dummy);

  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          className="flex border-b-2 justify-between text-left"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <p className="font-semibold text-sm text-slate-800 py-1">
                {item?.card?.info?.name}
              </p>
              <p className=" text-sm text-slate-800">
                Rs.
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.finalPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>

              <p className="text-sm text-slate-500 py-2">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 p-2 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="Item Image"
              className="w-full "
            />
            <button
              className="bg-slate-900 text-white p-1 absolute bottom-1 left-12"
              type="button"
              onClick={() => handleAddClick(item)}
              //dispatch an action
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
