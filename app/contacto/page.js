export default function Contacto() {
    return (
      <div>
        <h1>Contacto</h1>
        <form>
          <label>Nombre</label>
          <input type="text" className="u-full-width" placeholder="Tu nombre" />
          <label>Email</label>
          <input type="email" className="u-full-width" placeholder="Tu email" />
          <label>Mensaje</label>
          <textarea className="u-full-width" placeholder="Tu mensaje"></textarea>
          <button type="submit" className="u-full-width button-primary">Enviar</button>
        </form>
      </div>
    );
  }
  