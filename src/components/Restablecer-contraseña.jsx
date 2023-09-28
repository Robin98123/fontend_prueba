import React, { useState } from 'react'
import '../styles/RestablecerContraseña.scss'
import '../assets/icomoon/style.css'



const Modal_listaUsuarios = ({isOpen, closeModal}) => {

    if(!isOpen) return null;


    return(
        <div className='Modal-container-restablecer'>
            <div className='main-container-restablecer'>
                <div className='tittle-container-restablecer'>
                    <h1>Restablecer Contraseña</h1>
                </div>

                <div className='form-container-restablecer'>
                    <div>
                        <p>A su correo llegará un link para reestablecer la contraseña el cual, <br></br> solo tendrá una validez de 10 minutos</p>
                    </div>
                    <form action="">
                                <div class="form-restablecer">      
                                    <input type="email" required/>
                                    <span class="highlight-restablecer"></span>
                                    <span class="bar-restablecer"></span>
                                    <label>Correo Electronico registrado</label>
                                </div>


                            <div className='sumbit-button-restablecer'>
                                <input value="Restablecer"/>
                            </div>
                    </form>
                </div>
            </div>

                <div className='icon-close_container'>
                    <span class="icon-close" onClick={closeModal}></span>
                    
                </div>
        </div>      
    );
}

export default Modal_listaUsuarios;