import React from 'react';
import { StyleSheet, View,TouchableOpacity, Image,Text,Dimensions} from 'react-native';

const PocetniEkran = ({ navigation }) => {
  return (
    <View style={stilovi.ekran}>     
        <View style={stilovi.gumbovi}>
         <TouchableOpacity style={stilovi.gumb}  onPress={()=>{navigation.navigate('Prikaz')}}>
          <Text>Popis obaveza</Text>
          <Image style={stilovi.slika} source={require("../assets/list.png")}/>
        </TouchableOpacity>
         <TouchableOpacity style={stilovi.gumb}  onPress={()=>{navigation.navigate('Unos')}}>
          <Text>Unos nove obaveze</Text>
          <Image style={stilovi.slika} source={require("../assets/add-list-1.png")}/>
        </TouchableOpacity>      
          <TouchableOpacity style={stilovi.gumb}  onPress={()=>{navigation.navigate('Kalendar')}}>
          <Text>Kalendar</Text>
          <Image style={stilovi.slika} source={require("../assets/calendar.png")}/>
        </TouchableOpacity>
         </View>
      </View>
 
  );
};

const stilovi = StyleSheet.create({
  ekran: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  gumb: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: Dimensions.get('window').width < 600 ? Dimensions.get('window').width/3 : Dimensions.get('window').width/11

  },
  gumbovi: {
      flexDirection: 'column' ,
      alignItems: 'center',
      width: '90%',
      justifyContent: 'space-between',
      paddingHorizontal: 15,

  },
  slika: {
    width:83,
    height: 90
  }

});

export default PocetniEkran;
