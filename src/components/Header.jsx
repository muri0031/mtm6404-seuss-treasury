import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
<nav className='nav-menu'>
<NavLink to="/">Seuss Treasury</NavLink>
<NavLink to="/books">Books</NavLink>
<NavLink to="/quotes">Quotes</NavLink>

</nav>
    );
}