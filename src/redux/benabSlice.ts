import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../Type";
interface StoreState {
  productData: ProductProps[];
}

const initialState: StoreState = {
  productData: [],
};
export const benabSlice = createSlice({
  name: "benab",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.productData.find((item: ProductProps) => {
        item?._id === action?.payload?._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item?._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item?._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item: ProductProps) => item?._id !== action.payload
      );
    },
    resetProduct: (state) => {
      state.productData = [];
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetProduct,
} = benabSlice.actions;
export default benabSlice.reducer;
