import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.min.css';

const NavBar = () => {
  return (
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li class="menu-text">Your Tennis App</li>
          <li><a href="/">Main Profile</a></li>
          <li><a href="/history">Match History</a></li>
          <li><a href="#0">Exchange Lineup</a></li>
        </ul>
      </div>
</div>
  )
};

export default NavBar;