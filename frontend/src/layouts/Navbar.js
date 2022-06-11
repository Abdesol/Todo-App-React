import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom';

/*
A layout for the Navigation bar
*/
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Todo App</h1>
            <div className="links">
                <Link className='link' to="/">Login</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;