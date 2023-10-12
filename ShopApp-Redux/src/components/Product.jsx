import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/CartSlice";

const Product = ({item}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart!");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart!");
  }

  return (
    <div className="product flex flex-col items-center justify-between 
    hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
    hover:scale-105 
    transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] ">
      <div>
        <p className="title text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>

      <div>
        <p className="desc w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>
      
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5 ">
          <p className="text-green-600 font-semibold">
            ${item.price}
           </p>        

        {/*ye logic hai add to cart and remove from cart ke liye */} 
        { 
        //agar cart mei koi aisi entity hai jiski id post ki id se match krti hai mtlb yahape remove wala button aayega
          cart.some((entity) => entity.id == item.id) 
          ? 
          (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick={removeFromCart} >
              Remove Item
            </button>
          ) 
          : 
          ( //agar present ni hai toh add ka button aayega
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in"
              onClick={addToCart}>
                Add to Cart
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
