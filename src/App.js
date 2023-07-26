import './App.css';
import { Login } from "./LoginPage/Login";
import { Register } from "./LoginPage/Register";
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ContactPage } from './Pages/ContactPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { CategoryPage } from './Pages/CategoryPage';
import { MealPage } from './Pages/MealPage';

import {Routes, Route} from 'react-router-dom';

export const App = () => {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/meal/:id' element={<MealPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
