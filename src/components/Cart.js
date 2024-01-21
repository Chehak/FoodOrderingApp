import { clearCart } from "../utils/cartSlice";

import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems");
  return (
    <div className="w-6/12 text-center m-auto">
      <div className="m-2 p-2 font-bold text-lg flex gap-3">
        <h1>Cart</h1>
        <h3 onClick={handleClearCart}>Clear Cart</h3>
      </div>

      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
