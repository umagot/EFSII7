"use client";

import { useState } from 'react';
import FormCitas from '../components/FormCitas/FormCitas';
import Card from '../components/Card/Card';


export default function Reservas() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    nuevaCita.id = Date.now();
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
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
