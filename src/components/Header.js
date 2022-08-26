import { NavLink } from 'react-router-dom';
import Logo from '../images/space-travellers.png';
import '../styles/header.css';

const Navbar = () => (
  <header>
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Space-Travelers-Logo" />
        <h1>Space Traveller&#039;s Hub</h1>
      </div>
      <nav className="nav-items">
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </div>
    <div className="avatar" />
  </header>
);
export default Navbar;
