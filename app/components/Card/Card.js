
import './Card.module.css';

function Card({ id, mascota, dueño, fecha, hora, sintomas, eliminarCita }) {
    return (    
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{dueño}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id)}
            >
                Eliminar ×
            </button>
        </div>
    );
}

export default Card;
