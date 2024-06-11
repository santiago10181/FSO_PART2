const NewPersonForm = ({ nuevoNombre, nuevoNumeroTelefono, onSubmit, onNombreChange, onNumeroTelefonoChange }) => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nuevoNombre} onChange={onNombreChange} />
        </div>
        <div>
          <label>Número de teléfono:</label>
          <input type="tel" value={nuevoNumeroTelefono} onChange={onNumeroTelefonoChange} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    );
  };
export default NewPersonForm