import { useGlobal } from "../../hooks/useGlobal";

function List() {
  const { lista } = useGlobal();

  return (
    <div>
      <ul>
        {lista.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

        <p>
          {lista.length === 0 ? "Nenhum resultado encontrado" : ""}
        </p>
      </ul>

     
    </div>
  );
}

export default List;
