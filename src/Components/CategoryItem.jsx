import { Link } from 'react-router-dom';

export const CategoryItem = ({idCategory, strCategory, strCategoryDescription, strCategoryThumb}) => {
  return (
    <div className='catrgory-block'>
        <img className='category-img'src={strCategoryThumb} alt={strCategory} />
        <div>{strCategory}</div>
        <div>{strCategoryDescription.length > 100 ? strCategoryDescription.slice(0, 100) + '...' : strCategoryDescription}</div>
        <Link className='detail' to={'/category/' + strCategory}>Detail {strCategory}...</Link>
    </div>
  )
}
