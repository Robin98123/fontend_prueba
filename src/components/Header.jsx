import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Notificaciones from './NotificacionesPanel'
import MenuUsuario from './MenuUsuario'
import LogoTreea from '../assets/Logos/LogoTreea.png'
import '../styles/Header.scss'


const Header = () => {
    return ( 

        <>

        <header>
            <div className='tittle-container'><h1><strong>CMR</strong> Tree-a</h1></div>
            <div className='nav-container'>
                <div className='Logo_menu'>
                <Link to='/'> <img src={LogoTreea} alt=""></img></Link>

                        <nav>
                            <li><Link to='/Usuario' style={{ color: 'inherit', textDecoration: 'inherit'}}>Usuario</Link></li>
                            <li><Link to='/Grafica' style={{ color: 'inherit', textDecoration: 'inherit'}}>Gráfica</Link></li>
                            <li><Link to='/Cliente'style={{ color: 'inherit', textDecoration: 'inherit'}}>Cliente</Link></li>
                            <li><Link to='/Contacto'style={{ color: 'inherit', textDecoration: 'inherit'}}>Contacto</Link></li>
                            <li><Link to='/Acercamiento'style={{ color: 'inherit', textDecoration: 'inherit'}}>Acercamiento</Link></li>
                        </nav>
                        
                </div>

                <div className='action-buton-container'>
                     <Notificaciones/>
                    <MenuUsuario/>
                </div>
                
            </div>
            
        </header>
        <hr/>
        <Outlet/>
        </>
     );
}
 
export default Header
