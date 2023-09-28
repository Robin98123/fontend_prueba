import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Header from './components/Header';
import Usuario from './pages/Usuario';
import Grafica from './pages/Grafica';
import Cliente from './pages/Cliente';
import Contacto from './pages/Contacto';
import Acercamiento from './pages/Acercamiento';




function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Header/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='Usuario' element={<Usuario/>}/>
              <Route path='Grafica' element={<Grafica/>}/>
              <Route path='Cliente' element={<Cliente/>}/>
              <Route path='Contacto' element={<Contacto/>}/>
              <Route path='Acercamiento' element={<Acercamiento/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
