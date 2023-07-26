import { NavLink as Link } from 'react-router-dom';

export const Header = () => {
  
  return (
    
        <nav className='nav-bar'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </nav>
    
  )
}
