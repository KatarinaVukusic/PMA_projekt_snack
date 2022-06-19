import React from "react";
import {View,TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons,Entypo } from '@expo/vector-icons'

import { createStore, combineReducers  } from "redux";
import obavezaReducer from "./store/reducers/obaveze";
import { Provider } from "react-redux";

import PocetniEkran from "./screens/PocetniEkran";
import EkranUnos from "./screens/EkranUnos";
import PrikazObaveza from "./screens/PrikazObaveza";
import DetaljniPrikaz from "./screens/DetaljniPrikaz";
import Kalendar from "./screens/Kalendar";

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();

const tabOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let imeIkone;
    if (route.name === "SviPopis") {
      imeIkone = focused ? "view-list" : "list";
    } else if (route.name === "IzvrseniPopis") {
      imeIkone = focused ? "check-circle" : "check-circle";
    }
    return <MaterialIcons name={imeIkone} size={size} color={color} />;
  },
  tabBarInactiveTintColor: "#fff",
  tabBarActiveTintColor: "#ffd700",
  tabBarStyle: {
    backgroundColor: "#3cb371",
    height: 60,
  },
});

const TabEkrani = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="SviPopis"
        component={PrikazObaveza}
        initialParams={{ prikaz: "svi" }}
        options={{ tabBarLabel: "Svi" }}
      />
      <Tab.Screen
        name="IzvrseniPopis"
        component={PrikazObaveza}
        initialParams={{ prikaz: "izvr" }}
        options={{ tabBarLabel: "Samo izvrsene" }}
      />
    </Tab.Navigator>
  );
};

const glavniReducer = combineReducers({
  obaveze: obavezaReducer
});

const centralniSpremnik=createStore(glavniReducer);


function App({navigation}) {
  return (
    <Provider store={centralniSpremnik}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#3cb371",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 25,             
            },
          }}
        >
          <Stack.Screen name="Naslovna" component={PocetniEkran}  options={{
              title: 'To-do lista'
            }}/>
          <Stack.Screen name="Unos" component={EkranUnos} />
          <Stack.Screen name="Prikaz" component={TabEkrani} options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Unos')}>
                      <View>
                        <Entypo name="add-to-list" size={24} color="#fff" />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}/>
          <Stack.Screen name="Detalji" component={DetaljniPrikaz} options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Naslovna')}>
                      <View>
                        <MaterialIcons
                          name="home"
                          size={26}
                          color={'#fff'}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }} />
            <Stack.Screen name="Kalendar" component={Kalendar} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  );
}

export default App;
