import './App.css';
import Mainpage from './Components/Mainpage.jsx';
import { Route,Routes } from 'react-router-dom';
// import Mealcards from './Components/Mealcards.jsx';
import Mealinfo from './Components/Mealinfo.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>
  );
}

export default App;
