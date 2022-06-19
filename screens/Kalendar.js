import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Image,
  Alert,Platform
} from 'react-native';
import Gumb from '../components/Gumb';
import { useSelector } from 'react-redux';
import DateTime from 'react-native-customize-selected-date';
import _ from 'lodash';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Kalendar = ({ navigation }) => {
  const obaveze = useSelector((state) => state.obaveze.sveObaveze);
  const [errorMessage, setErrorMessage] = useState('');

  let niz = [];
  let datumi = [];
  for (let i = 0; i < obaveze.length; i++) {
    const title = obaveze[i].naziv;
    const start = new Date(obaveze[i].datum);
    const string = start.toISOString().split('T')[0];
    datumi.push(string);
    const obj = { title: title, string: string };

    niz.push(obj);
  }

  const onChangeDate = (date) => {
    for (let i = 0; i < niz.length; i++) {
      if (niz[i].string === date) {
        if (Platform.OS === 'web') {
            setErrorMessage(`Obaveza: ${niz[i].title}`);
        } else {
             Alert.alert('Obaveza', niz[i].title, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        }
        return;
      }
      else{
        setErrorMessage('')
      }
    }
  };

  const renderChildDay = (day) => {
    if (_.includes(datumi, day)) {
      return (
        <Image
          source={require('../assets/to-do.png')}
          style={stilovi.icLockRed}
        />
      );
    }
    
  };


  const colorOptions = {
  backgroundColor:'#3cb371',
}

  return (
    <View style={stilovi.container}>
      <DateTime
        date={new Date()}
        changeDate={(date) => onChangeDate(date)}
        format="YYYY-MM-DD"
        renderChildDay={(day) => renderChildDay(day)}
        containerStyle={colorOptions} 
        warpRowWeekdays={{backgroundColor: 'white'}}
        weekdayStyle={{color: 'black'}}
        notCurrentDayOfMonthStyle={{color: 'grey'}}
        warpDayStyle={{backgroundColor:'white'}}
        textDayStyle={{color:'black'}}
        dateSelectedWarpDayStyle={{backgroundColor:'green',color: 'white'}}
        />
      <Text>{errorMessage}</Text>
    </View>
  );
};

const stilovi = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icLockRed: {
    width: 13 / 2,
    height: 9,
    position: 'absolute',
    top: 2,
    left: 1,
  },
});

export default Kalendar;
