import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import React, {useEffect, useState} from "react";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {setPokeList(response.data.results)})
      .catch(err => {console.log(err);})
    }, []
    )

  const changePokeName = event => {
    setPokeName(event.target.value );
    // console.log(event.target.value )
  };

    return (
      <div className="App">
        <h1>Escolha Seu PoKe Fav!</h1>
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );

}

export default App;