import './components/main.css';
import MainPage from './components/Main.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import FavouritesPage from './components/favourites/FavouritesPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/frontend-challenge/favourite' element={<FavouritesPage />} />
          <Route path='/frontend-challenge' element={<MainPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
