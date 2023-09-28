import React, { useState } from 'react'
import '../styles/ListadoUsuarios.scss'
import { Grid , h } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import Modal_listaUsuarios from './Modal_ListaUsuarios';


const UsuariosCrud = () => {

    const[isModalOpen, setIsModalOpen]= useState(false)

    return (
        <>
        <div>
            <div className='tittle-button'>
                <h1><span class="icon-user-list"></span>Listado de Usuarios</h1>
                <button onClick={()=> setIsModalOpen(true)}><span class="icon-add"></span>Agregar Usuario</button>
                <Modal_listaUsuarios isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
            </div>
        </div>
        <div>
                <Grid
                data={[
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],
                    ['John', 'martines', '123456', 'mike@gmail.com', 'Gerente', 'Activo', 'Accion1' ],

                ]}
                columns={['Nombre', 'Apellido','Cédula', 'Correo', 'Rol', 'Estado', 'Acciones']}
                search={true}
                sort
                pagination={{
                    limit: 3,
                }}
                />
        </div>

        <div>

        </div>
        </> 
     );
}
 
<div></div>
export default UsuariosCrud;