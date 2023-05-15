import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeal, fetchMealById } from "./slice/slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  const dispatch = useDispatch();
  const [dish, setDish] = useState("");
  const meal = useSelector((meal) => meal);

  const handleChange = (e) => {
    setDish(e.target.value);
  };

  const clickHandler = () => {
    console.log("clicked");
  };
  useEffect(() => {
    dispatch(fetchMeal(dish));
  }, [dispatch, dish]);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-6 col-md-8  d-sm-block"></div>
            <div className="d-sm-block col-12 col-md-4">
              <div className="text-top text-center">Search Recipe</div>
              <input
                className="hero-input w-100"
                type="text"
                value={dish}
                onChange={handleChange}
              />
              <br />
              <Button
                className="my-3 bg-danger w-100"
                onClick={() => dispatch(fetchMeal(dish))}
              >
                Click
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="display-2 my-5">
            <strong>
              <u>Recipes</u>
            </strong>
          </div>
          {meal.meal.meal.meals &&
            meal.meal.meal.meals.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center"
                >
                  <Card className="card m-3" style={{ width: "18rem" }}>
                    <Card.Img
                      className="bg-success img"
                      variant="top"
                      src={item.strMealThumb}
                    />
                    <Card.Body>
                      <Card.Title>{item.strMeal}</Card.Title>
                      <Card.Text>{item.strArea}</Card.Text>
                      <Link to={`/${item.idMeal}`}>
                        <Button onClick={clickHandler} variant="danger">
                          More Detail
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Recipe;
