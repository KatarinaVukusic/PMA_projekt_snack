import { View, Text, StyleSheet} from 'react-native';
import React,{useEffect,useState,useCallBack} from 'react';
import Gumb from '../components/Gumb';
import { useSelector, useDispatch } from 'react-redux';
import { promjenaIzvrsenosti} from '../store/actions/obaveze';



const DetalnjiPrikaz = ({route,navigation}) => {
  const [izvrseno, postaviIzvrseno] = useState(false);

  const idObaveze = Number(route.params.id);
  const sveObaveze=useSelector((state) => state.obaveze.sveObaveze)
  const obaveza=sveObaveze.find((o) => o.id === idObaveze);

  const izvrseneObaveze = useSelector((state) => state.obaveze.izvrseneObaveze);

  useEffect(() => {
    postaviIzvrseno(izvrseneObaveze.some((o) => o.id === obaveza.id));
  }, [izvrseneObaveze, obaveza]);
  
  const dispatch = useDispatch();

  const akcijaIzvrsenost = () => {
    console.log("Saljem ID", idObaveze)
    dispatch(promjenaIzvrsenosti(idObaveze));
  };


  return (
      <View style={stil.ekran}>
        <View style={stil.tablica}>
          <View style={stil.redak}>
            <View style={stil.stupac}>
              <Text>ID Obaveze</Text>
            </View>
            <View style={stil.stupac}>
              <Text style={stil.bold}>{obaveza.id}</Text>
            </View>
          </View>
          <View style={stil.redak}>
            <View style={stil.stupac}>
              <Text>Naziv obaveze</Text>
            </View>
            <View style={stil.stupac}>
              <Text style={stil.bold}>{obaveza.naziv}</Text>
            </View>
          </View>
          <View style={stil.redak}>
            <View style={stil.stupac}>
              <Text>Važnost obaveze</Text>
            </View>
            <View style={stil.stupac}>
            <Text style={stil.bold}>{obaveza.vazno === true ? 'Da' : 'Ne'}</Text>
            </View>
          </View>
          <View style={stil.redak}>
            <View style={stil.stupac}>
              <Text>Datum obaveze</Text>
            </View>
            <View style={stil.stupac}>
              <Text style={stil.bold}>{obaveza.datum}</Text>
            </View>
          </View>  
         <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Izvrseno: {izvrseno ? 'DA' : 'NE'}</Text>
            <Gumb title="Promjena izvrsenosti" onPress={akcijaIzvrsenost} />
          </View>
         </View>
          
        </View>
      </View>
    );
  };
            
           
const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  bold:{
    fontWeight: "bold",
  }

});

export default DetalnjiPrikaz;
