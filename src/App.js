
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/pokemonpage/Pokemon';
import DetailPage from './pages/detailpage/DetailPage';
import FavPage from './pages/favpage/FavPage';

function App() {
 
  return (
   <Router>
    <Routes>
      <Route  path='/' exact element={<Pokemon />} />
      <Route path='/detail/:name' element={<DetailPage />} />
      <Route path='/fav' element={<FavPage />} />
    </Routes>
   </Router>
  );
}

export default App;
