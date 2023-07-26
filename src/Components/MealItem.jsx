import { useNavigate } from "react-router-dom";

export const MealItem = ({idMeal, strMeal, strMealThumb}) => {

    const navigate = useNavigate();

  return (
    <div className="meal-item" onClick={() => navigate('/meal/' + idMeal)}>
        <img className="meal-img" src={strMealThumb} alt={strMeal} />
        <div>{strMeal}</div>
    </div>
  )
}
