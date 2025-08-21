import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist) {
          exist.amount += productId.amount;
          exist.totalPrice += productId.price * productId.amount;
          state.totalAmount += productId.amount;
          state.totalPrice += productId.price * productId.amount;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            img: productId.img,
            amount: productId.amount,
            totalPrice: productId.price * productId.amount,
            title: productId.title,
          });
          state.totalAmount += productId.amount;
          state.totalPrice += productId.price * productId.amount;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find((product) => product.id === productId.id);
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) => product.id !== productId.id
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    updateCart(state, action) {
      const updatedCart = action.payload;
      state.cart = updatedCart;
      state.totalAmount = updatedCart.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      state.totalPrice = updatedCart.reduce(
        (sum, item) => sum + item.price * item.amount,
        0
      );
    },

    // updateQuantity(state, action) {
    //   const { id, amount } = action.payload;
    //   try {
    //     const item = state.cart.find((product) => product.id === id);
    //     if (item) {
    //       // Calculate the difference in amount
    //       const amountDifference = amount - item.amount;
    //       // Update the item amount
    //       item.amount = amount;
    //       // Update the item total price
    //       item.totalPrice = item.price * amount;
    //       // Update the total amount and total price
    //       state.totalAmount += amountDifference;
    //       state.totalPrice += amountDifference * item.price;
    //     }
    //   } catch (error) {
    //     return error;
    //   }
    // },
    // updateQuantity: (state, action) => {
    //   // Find the item and update its quantity
    //   const { id, quantity } = action.payload;
    //   const item = state.items.find((item) => item.id === id);
    //   if (item) {
    //     item.amount = quantity;
    //     item.totalPrice = item.price * quantity;
    //   }
    // },
  },
});

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
