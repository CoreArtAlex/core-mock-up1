import './App.css';
import Home from '../src/components/Home'
import QuienesSomos from '../src/components/QuienesSomos'
import Servicios from '../src/components/Servicios'
import Blog from '../src/components/Blog'
import Contact from '../src/components/Contact'
import {StyleMain} from '../src/styles/Main.styles'
import {BrowserRouter,Router,Route,Link, Routes} from 'react-router-dom'


function App() {
  return (
    <StyleMain>
      <div className="App">
        <Router>
          <h3 className='title' id='title-menu'>Mock-Up</h3>
          <image className='logo' id='logo-menu'></image>
          <Link className='home' id='home-menu'>Home</Link>
          <Link>Quienes Somos</Link>
          <Link>Servicios</Link>
          <Link>Blog</Link>
          <Link>Contacto</Link>
          <button>LogIn</button>
        </Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/quienessomos' element={<QuienesSomos/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>
      </div>
    </StyleMain>
  );
}

export default App;
