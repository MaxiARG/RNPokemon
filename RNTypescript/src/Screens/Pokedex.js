import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { getPokemonsApi , getPokemonDetailsByUrlApi} from '../api/pokemon';
import PokemonList from '../Components/PokemonList.tsx';

export default function Pokedex() {
const [pokemons, setPokemons] = useState([]);
// console.log("Pokemons->", pokemons);

  useEffect( () => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  

  const loadPokemons = async () => {
    try{
      const response = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const pokemons of response.results){
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemons.url)
        // console.log("--- " + JSON.stringify(pokemonDetails));
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })

      }

      setPokemons([...pokemons, ...pokemonsArray]);
    }catch(error){
      console.log(error);
    }
  }
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons}/>
    </SafeAreaView>
  )
}