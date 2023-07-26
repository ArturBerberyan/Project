import { CategoryItem } from "./CategoryItem"

export const CategoryList = ({categories}) => {
  return (
    <div className="container">
        {
            categories.map(el => <CategoryItem key={el.idCategory} {...el} />)
        }
    </div>
  )
}
