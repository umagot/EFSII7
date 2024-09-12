"use client";
import './FormCitas.module.css';
import { useState } from 'react';

function FormCitas({ agregarCita }) {
    const mascota = useState('');
    const dueño = useState('');
    const fecha = useState('');
    const hora = useState('');
    const sintomas = useState('');

    const valores = () => {
        const nuevaCita = {
            mascota: mascota.current.value,
            dueño: dueño.current.value,
            fecha: fecha.current.value,
            hora: hora.current.value,
            sintomas: sintomas.current.value
        };
        agregarCita(nuevaCita);
    
        mascota.current.value = '';
        dueño.current.value = '';
        fecha.current.value = '';
        hora.current.value = '';
        sintomas.current.value = '';
    };

    return (
        <form className='formm'>
            <label>Nombre Mascota</label>
            <input type="text" className="u-full-width" placeholder="Nombre Mascota" ref={mascota} />
            <label>Nombre Dueño</label>
            <input type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" ref={dueño} />
            <label>Fecha</label>
            <input type="date" className="u-full-width" ref={fecha} />
            <label>Hora</label>
            <input type="time" className="u-full-width" ref={hora} />
            <label>Síntomas</label>
            <textarea className="u-full-width" ref={sintomas}></textarea>
            <button type="button" className="u-full-width button-primary" onClick={valores}>Agregar Cita</button>
        </form>
    );
}

export default FormCitas;


