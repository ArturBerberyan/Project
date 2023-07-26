import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {

  const navigate = useNavigate();

  return (
    <div className='about-container'>
      <Header />
      <div className='about'>
        <h1 className='title'>SUPER FOOD</h1>
        <p>“It all starts with ingredients. We’ve been working closely with farmers and fishermen since 2002. They are the first people I talk to each morning!</p>
        <p>Many of my culinary values are the same ones you’ll find in 90% of the world’s grandmothers.</p>
        <p>That said, you’ll find me on the leading edge of most culinary techniques and ingredients.</p>
        <p>I work to match just the right food and wine combinations (sometimes they are unexpected)</p>
        <p>I serve nothing that is not in season.</p>
        <p>I look forward to hosting you soon."</p>
        <p>Tony Maws</p>
        <button onClick={() => navigate('/home') } type='submit' className='go-menu'>VIEW MENU</button>
      </div>
      <Footer />
    </div>
  )
}
