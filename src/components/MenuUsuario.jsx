import React, { useState } from 'react'
import '../styles/MenuUsuario.scss'
import '../assets/icomoon/style.css'

const MenuUsuario = () => {


    //ocultar menu
    
    const [infoUser, setinfoUser] = useState(true)

    const toggleinfoUser = () => {
        setinfoUser (!infoUser )
    }

    return ( 
            <div className='perfil-container'>
                <div className='perfil-img'><h1>RR</h1></div>

                <div className='desplegable-container'>
                    <div className='desplegable-button' 
                    onClick={toggleinfoUser}><span class="icon-desplegable"></span></div>
                </div>

                {/* activar clase para acceder al menu   */}
                <span className= {`main-userinfo ${ infoUser ? 'NoisActive' : ''}`} >
                            <div className=  'user-info'>
                                <h1>Robinson Rincon Bernal</h1>
                                <h2>Usuario:</h2>
                                <p>frontend02tree@gmail.com</p>
                            </div>
                                <div className='perfil-icon'>
                                <span class="icon-perfil-icon-active"><p>Perfil</p></span>
                            </div>
                            <div className='Log-out'>
                                <button>Cerrar sesión<span class="icon-log-out"></span></button>
                            </div>
                </span>
            </div>
    );
}
 
export default MenuUsuario;