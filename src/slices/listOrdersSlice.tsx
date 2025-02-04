import { TOrder } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrderByNumberApi, getOrdersApi } from '../utils/burger-api';

export type TAllOrders = {
  orders: TOrder[];
  orderByNumber: TOrder | null;
  error: string | null;
  loading: boolean;
};
const initialState: TAllOrders = {
  orders: [],
  orderByNumber: null,
  error: null,
  loading: false
};

export const getAllOrders = createAsyncThunk('order/allOrders', getOrdersApi);

export const getOrderByNumber = createAsyncThunk(
  'order/orderByNumber',
  getOrderByNumberApi
);

export const allOrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  selectors: {
    getListOrdersSelector: (state) => state.orders,
    getOrderByNumberSelector: (state) => state.orderByNumber,
    getLoading: (state) => state.loading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getOrderByNumber.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        (state.loading = false),
          (state.orderByNumber = action.payload.orders[0]);
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        (state.loading = false), (state.orders = action.payload);
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.error.message || 'Ошбика загрузки');
      })
      .addCase(getOrderByNumber.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.error.message || 'Ошибка  получения заказа');
      });
  }
});

export const { getListOrdersSelector, getOrderByNumberSelector } =
  allOrdersSlice.selectors;
export const allOrderReducer = allOrdersSlice.reducer;
