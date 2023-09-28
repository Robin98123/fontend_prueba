import React, { useState } from 'react'
import '../assets/icomoon/style.css'
import '../styles/NotificacionesPanel.scss'

const NotificacionesPanel = () => {

    //funcionalidad ocultar notificaciones

    const [mainNotification, setmainNotification] = useState(true)

    const togglemainNotification = () => {
        setmainNotification (!mainNotification)
    }

    //funcionalidad ocultar configuraciones

    const [mainconfiguration, setmainconfiguration] = useState(true)
    
    const togglemainconfiguration = () => {
        setmainconfiguration (!mainconfiguration)
    }

    return ( 

    <div className='button-action_container  action-container_oculted'>
        <span className="icon-Notificacion" onClick={togglemainNotification}>
            <span className='notificacion-span' >0</span>
            {/* Agregar fncionalidad para ocultal o desocultar las notificaciones */}   
        </span>

        <span className={`notification-tray_container ${ mainNotification ? 'NoisActive' : ''}`}>
                    <div className='notification-tray'>
                        <p><span className="icon-message"></span>Bandeja de notificaciones</p>
                    </div>

                    <div className='tray-container'>
                        <div className='button-navigation'>
                            <button>Todas</button>
                            <button>No Leidas</button>
                        </div>
                        <div className='tray-card-notification'>
                            <div>
                                <p>El usuario Kevin con rol de Gerente tuvo un acercamiento con la empresa Coca Cola</p>
                                <span class="icon-menu-notificacion"></span>
                            </div>
                            <span className='tray-card_date'>28 de Nov 2023</span>
                        </div>

                        <button className='Vaciar-bandeja_button'>Vaciar Bandeja</button>
                    </div>
        </span>

        <span className="icon-configuracion" onClick={togglemainconfiguration}></span>
        <span className={`icon-configuration-content ${ mainconfiguration ? 'NoisActive' : ''}`}>

                    <div className='confuration-title-content'>
                        <p><span class="icon-asing-client"></span>Reasignación de clientes</p>
                    </div>

                    <div className='form-container'>
                        <form action="">
                            <select name="seleccionar vendedor" id="">
                                <option disabled selected> Vendedor </option>
                                <option value="text"> kevin </option>
                            </select>

                            <select name="seleccionar cliente" id="">
                                <option disabled selected> asignado a cliente </option>
                                <option value="text"> Cocacola </option>
                            </select>

                            <input type="submit" value="Asignar"/>
                        </form>
                    </div>
            </span>
    </div> 
);
}
 
export default NotificacionesPanel;