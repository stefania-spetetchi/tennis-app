import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.min.css';

const NavBar = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">Your Tennis App</li>
        <li>
          <a href="/">Main Profile</a>
        </li>
        <li>
          <a href="/history">Match History</a>
        </li>
        <li>
          <a href="/lineup">Exchange Lineup</a>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
