import Home from '../src/components/Home'
import QuienesSomos from '../src/components/QuienesSomos'
import Servicios from '../src/components/Servicios'
import Blog from '../src/components/Blog'
import Contact from '../src/components/Contact'
import {StyleMain} from '../src/styles/Main.styles'
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'


function App() {
  return (
    <StyleMain>
        <Router>
          <div className='main'>
            <img 
            className='logo' 
            id='logo-menu' 
            src=''></img>
            <h3 
            className='title'
            id='title-menu'>Mock-Up</h3>
            <nav className='menu' id='main-menu'>
              <Link 
              to="/" 
              className='home menu-ietm' 
              id='home-menu'>Home</Link>
              <Link 
              to="/quienessomos"
              className='quienessomos menu-ietm'
              id='quienessomos-menu'>Quienes Somos</Link>
              <Link 
              to="/servicios"
              className='servicios menu-ietm'
              id='servicios-menu'>Servicios</Link>
              <Link 
              to="/blog"
              className='blog menu-ietm'
              id='blog-menu'>Blog</Link>
              <Link 
              to="contact"
              className='contact menu-ietm'
              id='contact-menu'>Contacto</Link>
            </nav>
            <button
            className='login-btn'>LogIn</button>
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quienessomos" element={<QuienesSomos/>}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
    </StyleMain>
  );
}

export default App;
