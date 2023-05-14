// search by input
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s";
export const fetchMeal = createAsyncThunk("fetchMeal", async (meal) => {
  // const {id} = meal
  const response = await fetch(`${BASE_URL}=${meal}`);
  return response.json();
});

// search by input
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export const fetchMealById = createAsyncThunk("fetchMealById", async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return response.json();
});



const initialState = {
  meal: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  mealClicked: [],
};

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeal.rejected, (state, action) => {
        state.isError = true;
        state.isError = action.payload;
      })

      .addCase(fetchMeal.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMeal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.meal = action.payload;
      });

    builder
      .addCase(fetchMealById.rejected, (state, action) => {
        state.isError = true;
        console.log("error", action.payload);
      })

      .addCase(fetchMealById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMealById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.mealClicked = action.payload;
      });
  },
});

export default mealSlice.reducer;
