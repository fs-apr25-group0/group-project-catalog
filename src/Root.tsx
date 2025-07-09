import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';
import { CartPage } from './Pages/CartPage';
import { ProductsPage } from './Pages/ProductsPage';
import { FavoritesPage } from './Pages/FavoritesPage';
import { ProductInfoPage } from './Pages/ProductInfoPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
        <Route
          path=":category"
          element={<ProductsPage />}
        >
          <Route
            path=":itemId?"
            element={<ProductInfoPage />}
          />
        </Route>
        <Route
          path="favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="cart"
          element={<CartPage />}
        />

        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Route>
    </Routes>
  </Router>
);
