import { POKEMON_TYPE_COLORS } from "./Constants";

const getColorByPokemonType =  (typ) => POKEMON_TYPE_COLORS[typ.toLowerCase()]; 

export default getColorByPokemonType;