import './App.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
