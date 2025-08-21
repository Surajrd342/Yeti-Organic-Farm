import { React, useState, useEffect } from "react";
import apple from "../../assets/apple.png";
import redchili from "../../assets/redchilli.png";
import { GrSubtract, GrAdd } from "react-icons/gr";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../features/cartSlice";
import { NavLink } from "react-router-dom";
import IncrementDecrementBtn from "../Counter/CounterButton";

function CartSystem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);

  // const [count, setCount] = useState(1);
  // Local state to keep track of quantity changes
  const [localCart, setLocalCart] = useState(cart);
  // Sync local cart with redux cart
  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleIncrement = (index) => {
    const newCart = [...localCart];
    newCart[index] = {
      ...newCart[index],
      amount: newCart[index].amount + 1,
      totalPrice: newCart[index].price * (newCart[index].amount + 1),
    };
    setLocalCart(newCart);
  };
  const handleDecrement = (index) => {
    const newCart = [...localCart];
    if (newCart[index].amount > 1) {
      newCart[index] = {
        ...newCart[index],
        amount: newCart[index].amount - 1,
        totalPrice: newCart[index].price * (newCart[index].amount - 1),
      };
      setLocalCart(newCart);
    }
  };

  // const handleIncrement = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  //   // dispatch(updateQuantity({ id: product.id, amount: newCount }));
  // };

  // const handleDecrement = () => {
  //   if (count > 1) {
  //     const newCount = count - 1;
  //     setCount(newCount);
  //     // dispatch(updateQuantity({ id: product.id, amount: newCount }));
  //   }
  // };

  return (
    <>
      <div className="">
        {localCart.length > 0 ? (
          <div>
            <div class="relative overflow-x-auto overflow-y-auto sm:rounded-lg ">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 border">
                <thead class="text-xs text-[#808080] uppercase border-b">
                  <tr className="uppercase">
                    <th scope="col" class="px-6 py-3">
                      <span
                        scope="col"
                        class="font-medium text-[14px] leading-[14px]"
                      >
                        Product
                      </span>
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 font-medium text-[14px] leading-[14px]"
                    >
                      subtotal
                    </th>
                  </tr>
                </thead>

                <tbody className="">
                  {" "}
                  {localCart.map((item, index) => {
                    const subTotal = item.price * item.amount;
                    return (
                      <tr class="bg-white border-b items-center">
                        <td class="p-4 flex items-center">
                          <img
                            src={item.img}
                            class="w-16 md:w-32 max-w-full max-h-full"
                            alt=""
                          />
                          <p className="text-[16px] leading-[24px] text-gray-900">
                            {item.title}
                          </p>
                        </td>
                        <td class="px-6 py-4 font-normal text-gray-900 dark:text-white text-[16px] leading-[24px]">
                          ${item.price}
                        </td>
                        <td class="px-6 py-4">
                          <IncrementDecrementBtn
                            count={item.amount}
                            onIncrement={() => handleIncrement(index)}
                            onDecrement={() => handleDecrement(index)}
                          />
                          {/* <div className="flex items-center rounded-full border-solid border-2 border-grey p-1 justify-between w-[130px] ">
                          <button className="bg-[#F2F2F2] p-3 rounded-full">
                            <GrSubtract size={13} />
                          </button>
                          <input
                            className="md:text-sm text-sm w-10 text-center border-none"
                            type="text"
                            placeholder={item.amount}
                          />
                          <button className="bg-[#F2F2F2] p-3 rounded-full">
                            <GrAdd size={13} />
                          </button>
                        </div> */}
                        </td>

                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white text-[16px] leading-[24px]">
                          ${subTotal}
                        </td>
                        <td class="px-6 py-4">
                          <div className="group hover:bg-primary rounded-full flex items-center justify-center h-8 w-8">
                            <CiCircleRemove
                              onClick={() => dispatch(removeFromCart(item))}
                              size={25}
                              fill="#666666"
                              className="group-hover:fill-[#FFFFFF]"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Cart lower button */}
            <div className="flex items-center justify-between rounded-lg border-x border p-3 mt-3">
              <div>
                <NavLink to="/allproducts">
                  <button className="bg-[#F2F2F2] px-[32px] py-[14px] rounded-full text-[#4D4D4D] text-[14px] font-semibold hover:bg-[#333333] transition-all duration-250 hover:text-white">
                    Return to shop
                  </button>
                </NavLink>
              </div>
              <div>
                <button
                  className="bg-[#F2F2F2] px-[32px] py-[14px] rounded-full text-[#4D4D4D] text-[14px] font-semibold hover:bg-[#333333] transition-all duration-250 hover:text-white"
                  onClick={() => {
                    dispatch(updateCart(localCart));
                  }}
                >
                  Update Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div class="relative overflow-x-auto sm:rounded-lg">
            <div className=" border p-3 text-center ">
              <p className="text-[30px]">Cart is Empty...🥺</p>
              <p className="text-[20px] text-[#808080] md:mt-1">
                Add some Items 🍓
              </p>

              <NavLink to="/allproducts">
                <button className="mt-2 bg-primary hover:bg-[#2C742F] rounded-full p-2 px-4 text-white font-normal">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSystem;

const data = [
  {
    img: apple,
    name: `Apple`,
    price: `12`,
    quantity: `5`,
    subtotal: `60`,
  },
  {
    img: redchili,
    name: `Red Chilli`,
    price: `15`,
    quantity: `6`,
    subtotal: `90`,
  },
];
