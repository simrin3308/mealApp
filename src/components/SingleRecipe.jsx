import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMealById } from "./slice/slice";
import { Button } from "react-bootstrap";

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

  let instructions =
    mealClicked.meals && mealClicked.meals[0].strInstructions.split("\r\n");
  instructions = instructions?.filter((instruction) => instruction.length > 1);

  return (
    <React.Fragment>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {mealClicked.meals ? (
            <section class="py-5">
              <div class="container px-4 px-lg-5 my-5">
                <strong className="heading display-1 my-5">
                  <u className="mb-5">Details</u>
                </strong>
                <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6 mt-3">
                    <img
                      class="card-img-top mb-5 mb-md-0"
                      src={mealClicked.meals[0].strMealThumb}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="small mb-1">
                      {" "}
                      Id: {mealClicked.meals[0].idMeal}
                    </div>
                    <h1 class="display-5 fw-bolder">
                      <strong>
                        {mealClicked.meals && mealClicked.meals[0].strMeal}
                      </strong>
                    </h1>
                    <div class="fs-5 mb-5">
                      <div>
                        Area:{" "}
                        {mealClicked.meals && mealClicked.meals[0].strArea}
                      </div>
                      <div>
                        Category:{" "}
                        {mealClicked.meals && mealClicked.meals[0].strCategory}
                      </div>
                      <Link
                        target="_blank"
                        to={
                          mealClicked.meals && mealClicked.meals[0].strYoutube
                        }
                      >
                        <Button className="mt-4">Watch on Youtube</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="instructions mt-5 ">
                    <div className="display-3 mb-3">
                      {" "}
                      <strong className="heading">
                        <u>Instructions</u>
                      </strong>
                    </div>

                    <p class="lead">
                      {instructions.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </p>
                  </div>

                  <div>
                    <div className="display-3 mb-3">
                      {" "}
                      <strong className="heading">
                        <u>Ingredients</u>
                      </strong>
                    </div>

                    <h4>
                      {mealClicked.meals[0].strIngredient1}:
                      {mealClicked.meals[0].strMeasure1}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient2}:
                      {mealClicked.meals[0].strMeasure2}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient3}:
                      {mealClicked.meals[0].strMeasure3}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient4}:
                      {mealClicked.meals[0].strMeasure4}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient5}:
                      {mealClicked.meals[0].strMeasure5}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient6}:
                      {mealClicked.meals[0].strMeasure6}
                    </h4>
                    <h4>
                      {mealClicked.meals[0].strIngredient7}:
                      {mealClicked.meals[0].strMeasure7}
                    </h4>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <h2>Loading</h2>
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default SingleRecipe;
