import { Link, useLocation } from 'react-router-dom';

export default function Header () {

  const location = useLocation();
  
  return (
    <div className='header'>
      <div className='menu'>
        <Link to={'/'} className={location.pathname === '/'?'menu-item selected':'menu-item'}>
          Все котики
        </Link>
        <Link to={'/favourite'} className={location.pathname === '/favourite'?'menu-item selected':'menu-item'}>
          Любимые котики
        </Link>
      </div>
    </div>
  )
}