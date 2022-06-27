import React, { useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView
} from 'react-native';
import ElementListe from '../components/ElementListe';
import Gumb from '../components/Gumb';
import { useSelector ,useDispatch} from 'react-redux';
import { OBAVEZE } from '../data/test-podaci';




const PrikazObaveza = ({route, navigation}) => {
   
  const prikaz = route.params.prikaz
  const  obavezePrikaz=useSelector(state => {
    if (prikaz === "svi"){
       return state.obaveze.neizvrseneObaveze
    } else if (prikaz === "izvr")
    {
      return state.obaveze.izvrseneObaveze
    }
    return null
  }) 
  const ukupanBroj=useSelector(state => {
    return state.obaveze.neizvrseneObaveze.length;
  })
  const brojIzvrsenih=useSelector(state => {
    return state.obaveze.izvrseneObaveze.length;
  })

  const prikazPojedineObaveze =(podaci) =>{
    return(
      <ElementListe
      onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
      naziv={podaci.item.naziv}
    />
    )
  };
  return (
    <View>
    <View style={stil.ekran}>
     { prikaz==="svi" ? <Text style={stil.ukupanBroj}> Ukupan broj obaveza:  {ukupanBroj} </Text> : <Text style={stil.ukupanBroj}> Broj izvrenih obaveza: {brojIzvrsenih} </Text>}
    <View style={stil.lista}>

    <FlatList 
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={obavezePrikaz}
          renderItem={prikazPojedineObaveze}
          numColumns={1}
        />
    </View>
    </View>
    
</View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  lista: {
    width: '100%',
    alignItems: 'center',
  },
  ukupanBroj: {
    textAlign: 'center',
    fontSize: 17

  }

});

export default PrikazObaveza;
