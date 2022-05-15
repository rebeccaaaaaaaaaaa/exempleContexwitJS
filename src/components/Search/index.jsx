import React from "react";
import { useGlobal } from "../../hooks/useGlobal";	

function Search() {

   const {
       handleSearchRepo,
       handleInputValue,
   } = useGlobal(); 

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar repositório"
        onChange={handleInputValue}
      />
      <button onClick={handleSearchRepo}>Buscar</button>
    </div>
  );
}

export default Search;
