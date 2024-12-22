import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
<nav className='nav-menu'>
<NavLink to="/"  className="nav-link"> <img src='/grinch.png'></img> 

Seuss Treasury</NavLink>
<NavLink to="/books"  className="nav-link"> <img src='/book.png'></img> Books</NavLink>
<NavLink to="/quotes"  className="nav-link">  <img src='/quotes.png'></img>Quotes</NavLink>

</nav>
    );
}