import React, {useState} from 'react';
import RestablecerContraseña from './Restablecer-contraseña'
import '../styles/login.scss';
import LogoTreeapng from '../assets/Logos/LogoTreea.png'

function Login (){


    //mostrar contraseña//
    const[showpwd, setshowpwd] = useState(false)

    //restablecer contraseña
    const[isModalOpen, setIsModalOpen]= useState(false)

    return(
        <div className='login_container'>
            <div className='login_inputs'>
                <img src={LogoTreeapng} alt="logo_treea"/>
                <div className='CTA-login'>
                    <h1>Hola, Bienvenido a <strong>CMR</strong> Tree-a</h1>
                    <h2>Usa tu usuario y contraseña asignados, para poder ingresar</h2>
                </div>
                <div className='input-pasword_container'>
                    <form action="">
                        <div class="form-login">      
                            <input type="email" required/>
                            <span class="bar-login"></span>
                            <label>Usuario o correo</label>
                        </div>

                        <div class="form-login">      
                            <input type={showpwd ? "text" : "password"} required/>                           
                            <span class="bar-login"></span>
                            <label>Contraseña</label>
                        </div>
                        <div className='pasword_options'>
                            <div><input type='checkbox' name='Mostrar contraseña'onClick={() => setshowpwd (!showpwd)}/><p>Mostrar contraseña</p></div>
                            <button onClick={()=> setIsModalOpen(true)}>Recordar Contraseña</button>
                            <RestablecerContraseña isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
                        </div>

                        <button type="submit" className='button-submit'>Iniciar sesión</button>
                    </form>
                </div>
            </div>
            <div className='bannerLogin'>    
            </div>
        </div>
    )
}

export default Login;