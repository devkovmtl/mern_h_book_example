import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/hotels' element={<HotelList />}></Route>
      <Route path='/hotels/:hotelId' element={<HotelDetails />}></Route>
    </Routes>
  );
}

export default App;
