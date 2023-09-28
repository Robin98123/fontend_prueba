import React, { useState } from 'react'
import '../styles/Modal_ListaUsuarios.scss'
import '../assets/icomoon/style.css'

const Modal_listaUsuarios = ({isOpenAddClientes, closeModalAddClientes}) => {

    if(!isOpenAddClientes) return null;


    return(
        <div className='Modal-container'>
            <div>
                <div className='tittle-container'>
                    <h1>Crear Usuario</h1>
                </div>

                <div className='form-container'>
                    <form action="">

                        <div className='grid-form'>
                            <div>
                                <div class="form">      
                                    <input type="text" required/>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Nombre</label>
                                </div>

                                <div class="form">      
                                    <input type="text" required/>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Apellido</label>
                                </div>
                            </div>

                            <div>
                                <div class="form">      
                                    <input type="text" required/>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Cédula</label>
                                </div>

                                <div class="form">      
                                    <input type="text" required/>
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Celular</label>
                                </div>
                            </div>

                        </div>
                        
                            <div className='flex-form'>
                                <div class="form-corto">      
                                    <input type="text" required/>
                                    <span class="highlight-corto"></span>
                                    <span class="bar-corto"></span>
                                    <label>Correo Electrónico</label>
                                </div>

                                <div class="form-corto">      
                                    <input type="password" required/>
                                    <span class="highlight-corto"></span>
                                    <span class="bar-corto"></span>
                                    <label>Contraseña</label>
                                </div>

                                <div className='select-styles'>
                                    <select name="seleccionar vendedor" id="">
                                        <option disabled selected> Vendedor </option>
                                        <option value="text"> kevin </option>
                                    </select>
                                </div>
                            </div>

                            <div className='sumbit-button'>
                                <input value="agregar"/>
                            </div>
                    </form>
                </div>
            </div>

                <div className='icon-close_container'>
                    <span class="icon-close" onClick={closeModalAddClientes}></span>
                </div>
        </div>      
    );
}

export default Modal_listaUsuarios;