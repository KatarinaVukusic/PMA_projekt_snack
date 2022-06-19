import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const ElementListe = (props) => {
  return (
      <TouchableOpacity style={{alignItems: "center"}}
        onPress={props.onPress}>
        <View style={{ ...stil.tipka, ...props.style }}>
          <View style={stil.ime}>
            <Text style={stil.naslov}>{props.naziv}</Text>
          </View>
          <View style={stil.ikona}>
          <Foundation name="zoom-in" size={24} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    maxWidth: "80%",
    width: 400,
    height: 50,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 15,
    elevation: 3,
    flexDirection: 'row',
    opacity: 0.99,
    flex: 0.99,
  },
  ime: {
    width: '70%',
    flex: 1,
    padding: 5,
  },
  ikona: {
    width: '20%',
    alignItems: 'center',
  },
});

export default ElementListe;
