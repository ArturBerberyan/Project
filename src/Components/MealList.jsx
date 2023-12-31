import { MealItem } from "./MealItem";

export const MealList = ({meals}) => {
  return (
    <div className="meal-list">
        {
             meals.map(el => <MealItem key={el.idMeal} {...el} />)
        }
    </div>
  )
}
