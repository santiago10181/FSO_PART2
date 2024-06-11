const SearchFilter = ({ filtroBusqueda, onChange }) => {
    return (
      <div>
        <input type="text" placeholder="Buscar" value={filtroBusqueda} onChange={onChange} />
      </div>
    );
  };

  export default SearchFilter