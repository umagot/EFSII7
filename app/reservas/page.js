"use client";
import { useState, useEffect } from 'react';
import FormCitas from '../components/FormCitas/FormCitas';
import Card from '../components/Card/Card';

export default function Reservas() {
  const [citas, setCitas] = useState([]);


  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);


  const guardarCitasEnLocalStorage = (citasActualizadas) => {
    localStorage.setItem('citas', JSON.stringify(citasActualizadas));
  };

  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    const citasActualizadas = [...citas, nuevaCita];
    setCitas(citasActualizadas);
    guardarCitasEnLocalStorage(citasActualizadas);  
  };

  const eliminarCita = (id) => {
    const citasActualizadas = citas.filter(cita => cita.id !== id);
    setCitas(citasActualizadas);
    guardarCitasEnLocalStorage(citasActualizadas);
  };

  return (
    <div className="App">
      <h1>Reservar Citas</h1>
      <FormCitas agregarCita={agregarCita} />
      <div className="citas-lista">
        {citas.map(cita => (
          <Card
            key={cita.id}
            id={cita.id}
            mascota={cita.mascota}
            dueño={cita.dueño}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            eliminarCita={eliminarCita}
          />
        ))}
      </div>
    </div>
  );
}
