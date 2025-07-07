import { NavLink, Outlet } from 'react-router-dom';

export const App = () => (
  <div className="App">
    <header>
      <div>
        <NavLink to="/">
          <img
            src="****"
            alt="Shop logo"
          />
        </NavLink>

        <nav>
          <div>
            <NavLink to="/">Home</NavLink>

            <NavLink to="/phones">Phones</NavLink>

            <NavLink to="/tablets">Tablets</NavLink>

            <NavLink to="/accessories">Accessories</NavLink>
          </div>
          <div>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/cart">Card</NavLink>
          </div>
        </nav>
      </div>
    </header>

    <main className="section">
      <Outlet />
    </main>

    <footer>
      <NavLink to="/">
        <img
          src="****"
          alt="Shop logo"
        />
      </NavLink>

      <nav>
        <a href="https://github.com/">GITHUB</a>

        <NavLink to="/tablets">CONTACTS</NavLink>

        <NavLink to="/accessories">RIGHTS</NavLink>
      </nav>

      <div>
        <span className="uppercase">back to top</span>
        <button> scroll to top </button>
      </div>
    </footer>
  </div>
);
