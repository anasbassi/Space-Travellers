import { Link } from 'react-router-dom';
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
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
    <div className="avatar" />
  </header>
);
export default Navbar;
