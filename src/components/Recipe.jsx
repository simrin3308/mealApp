import React, { useState } from "react";
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

  return (
    <>
      <div className="hero">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-8"></div>
            <div class="col-6 col-md-4">
              <div className="text-top">Search Recipe</div>
              <input
                className="hero-input"
                type="text"
                value={dish}
                onChange={handleChange}
              />

              <Button onClick={() => dispatch(fetchMeal(dish))}>Click</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          {meal.meal.meal.meals &&
            meal.meal.meal.meals.map((item) => {
              return (
                <>
                  <div class="col-12 col-md-4 col-sm-12">
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
                          <Button onClick={clickHandler} variant="primary">
                            Go somewhere
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Recipe;
