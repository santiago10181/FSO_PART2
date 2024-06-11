import { useState } from 'react';
import NewPersonForm  from './componenets/Formulario'
import PeopleList  from './componenets/lista'
import SearchFilter  from './componenets/search'

const App = () => {
  const [personas, setPersonas] = useState([
    { nombre: 'Arto Hellas', numeroTelefono: '+358 40 1234567' }
  ]);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoNumeroTelefono, setNuevoNumeroTelefono] = useState('');
  const [filtroBusqueda, setFiltroBusqueda] = useState('');

  const agregarPersona = (evento) => {
    evento.preventDefault();
    const nuevaPersona = {
      nombre: nuevoNombre.trim(),
      numeroTelefono: nuevoNumeroTelefono.trim()
    };

    const nombreExistente = personas.find((persona) => persona.nombre.toLowerCase() === nuevaPersona.nombre.toLowerCase());

    if (nombreExistente) {
      alert('¡El nombre ya existe en el directorio telefónico!');
      return;
    }

    setPersonas(personas.concat(nuevaPersona));
    setNuevoNombre('');
    setNuevoNumeroTelefono('');
  };

  const handleSearchChange = (evento) => {
    setFiltroBusqueda(evento.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Directorio Telefónico</h2>
      <SearchFilter filtroBusqueda={filtroBusqueda} onChange={handleSearchChange} />
      <NewPersonForm
        nuevoNombre={nuevoNombre}
        nuevoNumeroTelefono={nuevoNumeroTelefono}
        onSubmit={agregarPersona}
        onNombreChange={(e) => setNuevoNombre(e.target.value)}
        onNumeroTelefonoChange={(e) => setNuevoNumeroTelefono(e.target.value)}
      />
      <PeopleList personas={personas} filtroBusqueda={filtroBusqueda} />
    </div>
  );
};

export default App;