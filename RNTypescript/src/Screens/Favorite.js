import { View, Text, Button, ScrollView, Card } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Favorite(props) {

  const [debeMostrar, setDebeMostrar] = useState(false);

  const miElementoCondicional = () => {
    let elem
    if(debeMostrar){
    elem = <Text>Texto Condicional</Text>
    }else{
      elem = ""
    }
    return elem;
  };

  const elem2 = props.mostrar == true ? <Text>Hola Mundo Elemento2</Text> : <Text>NO!</Text> ;

   const cambiarState = () => {
    setDebeMostrar(!debeMostrar);
   }

  return (
    
    <ScrollView>
        <Text style={{ textAlign: 'center', paddingTop:20 }}>Proximos Servicios a Arribar</Text>

      </ScrollView>
     
  )
}