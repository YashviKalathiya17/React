import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000/products";

// Thunks
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addProduct = createAsyncThunk("products/add", async (product) => {
  const res = await axios.post(API, product);
  return res.data;
});

export const updateProduct = createAsyncThunk("products/update", async (product) => {
  const res = await axios.put(`${API}/${product.id}`, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.list.findIndex(p => p.id === action.payload.id);
        state.list[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(p => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
