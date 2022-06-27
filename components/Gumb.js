import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Gumb = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.gumb, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  gumb: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: 150,
    height: 35,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3,

  },
  naslov:{
    color: "green",
    fontSize: 20
  }
});

export default Gumb;
