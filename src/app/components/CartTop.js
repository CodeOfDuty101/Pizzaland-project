import React from "react";
import { useContext } from "react";
// icons
import { IoCloseOutline } from "react-icons/io5";
// context
import { CartContext } from "../context/CartContext";

const CartTop = () => {
  const { setIsOpen, itemAmount } = useContext(CartContext);
  return (
    <div className="w-full h-20 border-b flex items-center justify-between px-10">
      {/* shopping bag left */}
      <div className="font-semibold">Shopping Bag({itemAmount})</div>
      {/* close icon */}
      <div onClick={() => setIsOpen(false)}>
        <IoCloseOutline className="text-3xl group-hover:scale-110 duration-300
          transition-all"/>
      </div>
    </div>
  );
};

export default CartTop;
