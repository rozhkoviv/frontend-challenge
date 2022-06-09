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
          <Route path='/favourite' element={<FavouritesPage />} />
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
