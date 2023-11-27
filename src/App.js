import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MenuAppBar from './component/Homepage1';
import Regi from './component/Regi';
import Login from './component/SignIn';
import SearchAppBar from './component/HomePage';
import Vists from './component/PastVists';
import TicketBookingPage from './component/Booking';
import Explore from './component/Events';
function App() {
  return (
  <div className='App'>
    <Router>
    <Routes>
      <Route exact path='/' element={<SearchAppBar/>}/>
      <Route exact path='/lo' element={<Login/>}/>
      <Route exact path='/re' element={<Regi/>}/>
      <Route exact path='/ho' element={<MenuAppBar/>}/>
      <Route exact path='/vi' element={<Vists/>}/>
      <Route exact path='/ex' element={<Explore/>}/>
      <Route exact path='/bo' element={<TicketBookingPage/>}/> 

      
    </Routes>
  </Router>
</div>
    
  );
}

export default App;
