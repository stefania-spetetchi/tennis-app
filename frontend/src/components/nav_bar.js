import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.min.css';

const NavBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Your Tennis App</li>
          <li><a href="/">Main Profile</a></li>
          <li><a href="/history">Match History</a></li>
          <li><a href="#0">Exchange Lineup</a></li>
        </ul>
      </div>
</div>
  )
};

export default NavBar;