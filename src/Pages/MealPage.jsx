import { getMealById } from "../Utils/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const MealPage = () => {

    const {id} = useParams();
    const [meal, setMeal] = useState({});
  
    useEffect(() => {
        getMealById(id).then(data => {
          setMeal(data.meals[0])
        })
      }, []);

  return (
    
    <div className="">
        <Header />
        <div className="item-container">
            <img className="item-img" src={meal.strMealThumb} alt='' />
            <div className='item-name'>{meal.strArea}</div>
            <div className=''>{meal.strCategory}</div>
        </div>
        <Footer />
    </div>
  )
}
