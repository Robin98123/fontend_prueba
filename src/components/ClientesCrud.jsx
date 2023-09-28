import React,{useState} from 'react'
import '../styles/ListadoUsuarios.scss'
import { Grid } from 'gridjs-react';
import "gridjs/dist/theme/mermaid.css";
import Modal_listaClientes from './Modal_ListaClientes';

const UsuariosCrud = () => {

    const[isModalOpenAddClientes, setIsModalOpenAddClientes]= useState(false)


    return (
        <>
        <div>
            <div className='tittle-button'>
                <h1><span class="icon-client-list"></span>Listado de Clientes</h1>
                <button onClick={()=> setIsModalOpenAddClientes(true)}><span class="icon-add"></span>Agregar cliente</button>
                < Modal_listaClientes isOpenAddClientes={isModalOpenAddClientes} closeModalAddClientes={() => setIsModalOpenAddClientes(false)}/>
            </div>
        </div>
        <div>
                <Grid
                data={[
                    ['John', 'john@example.com', '123456'],
                    ['Mike', 'mike@gmail.com', '123456'],
                    ['Mike', 'mike@gmail.com', '123456'],
                    ['Mike', 'mike@gmail.com', '123456'],
                    ['Mike', 'mike@gmail.com', '123456']
                ]}
                columns={['Tipo', 'Teléfono','Dirección','Departamento','Ciudad/municipio','industria','interés','Pagina Web/ URL','Rut', 'Acciones']}
                search={true}
                sort
                pagination={{
                    limit: 3,
                }}
                />
        </div>
        </> 
     );
}
 
<div></div>
export default UsuariosCrud;