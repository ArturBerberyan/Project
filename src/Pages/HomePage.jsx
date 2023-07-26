import { Header } from '../Components/Header';
import { CategoryList } from '../Components/CategoryList';
import { getAllCategories } from '../Utils/api';
import { useState, useEffect } from 'react';
import { Footer } from '../Components/Footer';


export const HomePage = () =>  {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    getAllCategories().then(data => {
        setCategories(data.categories);
    })
  }, [])

  return (
    <div className='home'>
       <Header />
       <CategoryList categories={categories} />
       <Footer />
    </div>
  )
}
