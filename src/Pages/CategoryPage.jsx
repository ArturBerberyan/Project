import { getFilteredCategory } from "../Utils/api";
import { MealList } from "../Components/MealList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const CategoryPage = () => {

  const {name} = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then(data => {
        setMeals(data.meals);
    });
}, []);

  return (
    <div className='meal-block'>
      <Header />
      <MealList meals={meals} />
      <Footer />
    </div>
  )
}
