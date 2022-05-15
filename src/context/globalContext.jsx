import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    valorInput: "",
    lista: [],
    handleInputValue: () => {},
    handleSearchRepo: () => {},
});

export function GlobalsProvider({ children }) {

  const [valorInput, setValorInput] = useState('');
  const [lista, setLista] = useState([]);

  //função para pegar o valor digitado no input
  const handleInputValue = (e) => {
    setValorInput(e.target.value);
    console.log(valorInput);
    setLista([]);

  }

  //função para buscar o repositório com o valor digitado no input
  const handleSearchRepo = (e) => {
    e.preventDefault();
    setLista([]);
    fetch(`https://api.github.com/search/repositories?q=${valorInput}`)
    .then(response => response.json())
    .then(data => {
      setLista(data.items);
      console.log(data.items);
    })
    .catch(error => console.log(error));
  }

  return (
    <GlobalContext.Provider
      value={{
        valorInput,
        lista,
        handleInputValue,
        handleSearchRepo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
