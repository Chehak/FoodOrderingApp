import ItemList from "./ItemList";

const ResturantCategory = ({ cat, showItems, setShowIndex, dummy }) => {
  // console.log(dummy, "kkjkjk");

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="shadow-md py-4 px-3 my-2">
        <div
          className="flex justify-between font-bold cursor-pointer"
          onClick={handleClick}
        >
          <div className="text-md">
            {cat?.card?.card?.title}({cat?.card?.card?.itemCards?.length})
          </div>
          <div>
            <span>▼</span>
          </div>
        </div>
        <div>
          {showItems && (
            <ItemList
              key={cat?.card?.card?.id}
              items={cat?.card?.card?.itemCards}
              dummy={dummy}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResturantCategory;
