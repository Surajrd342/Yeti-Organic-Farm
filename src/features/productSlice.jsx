import { createSlice } from "@reduxjs/toolkit";
import { AllProductData } from "../Data/ProductList";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: AllProductData,
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filtredData")) || AllProductData,
    popProductFilt:
      JSON.parse(sessionStorage.getItem("filtredPop")) || AllProductData,
    feaProductFilt:
      JSON.parse(sessionStorage.getItem("filteredFeat")) || AllProductData,
    filteredCat:
      JSON.parse(sessionStorage.getItem("filtredCat")) || AllProductData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || AllProductData,
    currentFilters: {
      category: null,
      type: null,
    },
  },
  reducers: {
    filterProducts: (state, action) => {
      try {
        state.currentFilters.type = action.payload;
        state.filteredProducts = AllProductData.filter((product) => {
          const matchesType = product.type === state.currentFilters.type;
          const matchesCategory = state.currentFilters.category
            ? product.category === state.currentFilters.category
            : true;
          return matchesType && matchesCategory;
        });
        console.log("Filtered data", state.filteredProducts);
        const saveState = JSON.stringify(state.filteredProducts);
        sessionStorage.setItem("filtredData", saveState);
      } catch (err) {
        return err;
      }
    },
    catFilter: (state, action) => {
      try {
        state.currentFilters.category = action.payload;
        state.filteredProducts = AllProductData.filter((product) => {
          const matchesCategory = product.category === state.currentFilters.category;
          const matchesType = state.currentFilters.type
            ? product.type === state.currentFilters.type
            : true;
          return matchesCategory && matchesType;
        });
        console.log("Filtered category", state.filteredProducts);
        const saveState = JSON.stringify(state.filteredProducts);
        sessionStorage.setItem("filtredCat", saveState);
      } catch (err) {
        return err;
      }
    },
    resetFilters(state) {
      state.currentFilters = { type: null, category: null };
      state.filteredProducts = state.allProducts;
      sessionStorage.removeItem("filteredData");
    },
    popProduct: (state, action) => {
      try {
        const filteredPop = AllProductData.filter(
          (product) => product.popularProduct === action.payload
        );
        state.popProductFilt = filteredPop;
        console.log("Filtered popular product", filteredPop);
        const saveState = JSON.stringify(filteredPop);
        sessionStorage.setItem("filtredPop", saveState);
      } catch (err) {
        return err;
      }
    },
    featProduct: (state, action) => {
      try {
        const filteredFeat = AllProductData.filter(
          (product) => product.featuredProducts === action.payload
        );
        state.feaProductFilt = filteredFeat;
        console.log("Filtered featured product", filteredFeat);
        const saveState = JSON.stringify(filteredFeat);
        sessionStorage.setItem("filteredFeat", saveState);
      } catch (err) {
        return err;
      }
    },
    hotProduct: (state, action) => {
      try {
        const filteredHot = AllProductData.filter(
          (product) => product.hotDeals === action.payload
        );
        state.filteredProducts = filteredHot;
        console.log("Filtered hot deals", filteredHot);
        const saveState = JSON.stringify(filteredHot);
        sessionStorage.setItem("filteredHot", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct: (state, action) => {
      try {
        const oneProduct = AllProductData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
        // console.log("oneProduct", oneProduct);
      } catch (err) {
        return err;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  filterProducts,
  catFilter,
  popProduct,
  featProduct,
  singleProduct,
  hotProduct,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
