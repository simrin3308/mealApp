import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMealById } from "./slice/slice";

const SingleRecipe = () => {
  const { mealClicked, isError, isLoading } = useSelector(
    (state) => state.meal
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(mealClicked);

  useEffect(() => {
    dispatch(fetchMealById(id));
  }, [dispatch, isError, id]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>{/* {mealClicked.meals.idMeal} */}check</div>
      )}
    </>
  );
};

export default SingleRecipe;
