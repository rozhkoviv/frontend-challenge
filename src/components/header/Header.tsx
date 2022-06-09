import { Link, useLocation } from 'react-router-dom';

export default function Header () {

  const location = useLocation();
  
  return (
    <div className='header'>
      <div className='menu'>
        <Link to={'/frontend-challenge/'} className={location.pathname === '/frontend-challenge/'?'menu-item selected':'menu-item'}>
          Все котики
        </Link>
        <Link to={'/frontend-challenge/favourite'} className={location.pathname === '/frontend-challenge/favourite'?'menu-item selected':'menu-item'}>
          Любимые котики
        </Link>
      </div>
    </div>
  )
}