import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="section">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
