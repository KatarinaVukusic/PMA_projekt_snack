import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Gumb from '../components/Gumb';
import { unosObaveze } from '../store/actions/obaveze';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'react-native-paper';
import DatePicker from 'react-native-neat-date-picker';

const EkranUnos = ({ navigation }) => {
  const [unosNaziv, postaviNaziv] = useState('');
  const [unosVazno, postaviVazno] = useState(false);
  const [unosDatum, postaviDatum] = useState(new Date());
  const [prikaziDatePicker, postaviDatePicker] = useState(false);

  const  prijasnjiDatum = (date = new Date()) => {
  const jucerr = new Date(date.getTime());
  jucerr.setDate(date.getDate() - 1);

  return jucerr;
}
  var jucer=prijasnjiDatum()
  const noviNaziv = (tekst) => {
    postaviNaziv(tekst);
  };
  const noviDatum = (tekst) => {
    postaviDatum(tekst);
  };
  const onConfirm = (date) => {
    postaviDatePicker(false);
    for (let [key, value] of Object.entries(date)) {
      if (key === 'dateString') postaviDatum(value);
    }
  };
  const prikazi = () => {
    postaviDatePicker(true);
  };
  const onCancel = () => {
    // You should close the modal in here
    postaviDatePicker(false);
  };

  const colorOptions = {
  headerColor:'#3cb371',
  backgroundColor:'#fff',
  weekDaysColor: 'black'
}


  const dispatch = useDispatch();

  const noviUnos = () => {

    const noviObjekt = {
      naziv: unosNaziv,
      vazno: unosVazno,
      datum: unosDatum,
    };

    dispatch(unosObaveze(noviObjekt));
    postaviDatum('');
    postaviNaziv('');
    navigation.goBack();
  };
  return (
    <View style={stil.ekran}>
      <Text>Naziv obaveze:</Text>
      <TextInput
        placeholder="Naziv"
        style={stil.unos}
        value={unosNaziv}
        onChangeText={noviNaziv}
      />
      <Text>Vazno:</Text>
      <Checkbox
        status={unosVazno ? 'checked' : 'unchecked'}
        onPress={() => {
          postaviVazno(!unosVazno);
        }}
      />
      <TextInput
        disabled={true}
        style={stil.unos}
        value={unosDatum}
      />
      <Button title={'Odaberi datum'} onPress={prikazi} />
      <DatePicker
        isVisible={prikaziDatePicker}
        initialDate={new Date()}
        minDate={jucer}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions={colorOptions}
           
      />
      <View style={{ flexDirection: 'row' }}>
        <Gumb title="Dodaj" onPress={noviUnos} />
        <Gumb title="Odustani" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unos: {
    width: '40%',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomColor: 'black',
  }

});

export default EkranUnos;
