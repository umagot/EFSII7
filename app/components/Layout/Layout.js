import Link from 'next/link';
import './Layout.module.css'; 

export default function Layout({ children }) {
  return (
    <div className='pag'>
      <header>
        <h1>Administrador de Pacientes</h1>
        <nav>
          <ul>
           
          </ul>
        </nav>
      </header>
      <main>
        {children} {}
      </main>
      <footer>
        <p>© 2024 Administrador de Pacientes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
