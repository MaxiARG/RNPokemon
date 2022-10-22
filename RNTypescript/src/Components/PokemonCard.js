import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import React from 'react';
import getColorByPokemonType from '../Utils/getColorByPokemonType';

export default function PokemonCard(props) {
  const {pokemon} = props;

  const pcolor = getColorByPokemonType(pokemon.type);
  console.log(pcolor);
  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...styles.bgStyles,
  };
  console.log(bgStyles);
  const gotToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={gotToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.name}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{uri: pokemon.image}} style={styles.imagen} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  imagen: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    height: 90,
    width: 90,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
});
