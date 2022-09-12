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
          <img src=''></img>
          <h3>Mock-Up</h3>
          <nav>
            <Link 
            to="/" 
            className='home' 
            id='home-menu'>Home</Link>
            <Link 
            to="/quienessomos"
            className='quienessomos'
            id='quienessomos-menu'>Quienes Somos</Link>
            <Link 
            to="/servicios"
            className='servicios'
            id='servicios-menu'>Servicios</Link>
            <Link 
            to="/blog"
            className='blog'
            id='blog-menu'>Blog</Link>
            <Link 
            to="contact"
            className='contact'
            id='contact-menu'>Contacto</Link>
          </nav>
          <button>LogIn</button>
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
