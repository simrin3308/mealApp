
import "./App.css";
import Recipe from "./components/Recipe";
import { Route, Routes } from "react-router-dom";
import SingleRecipe from "./components/singleRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Recipe />} />
        <Route exact path="/:id" element={<SingleRecipe />} />
      </Routes>
    </>
  );
}

export default App;
