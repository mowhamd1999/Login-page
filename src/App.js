import './App.css';
import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login'
import Signin from './Component/Signin/Signin'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
