const PeopleList = ({ personas, filtroBusqueda }) => {
    const personasFiltradas = personas.filter((persona) => {
      return persona.nombre.toLowerCase().includes(filtroBusqueda.toLowerCase()) || persona.numeroTelefono.includes(filtroBusqueda.toLowerCase());
    });
  
    return (
      <ul>
        {personasFiltradas.map((persona) => (
          <li key={persona.nombre}>
            {persona.nombre}: {persona.numeroTelefono}
          </li>
        ))}
      </ul>
    );
  };
  export default PeopleList