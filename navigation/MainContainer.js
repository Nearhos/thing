import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homepage from './screens/Homepage';
import addcards from './screens/addcards';
import playpage from './screens/playpage';
import  deletecards from './screens/deletecards';
import  adddeck from './screens/adddeck';
import  deletedeck from './screens/deletedeck.js';

//Screen names
const Homename = "Home";
const ad = "Add Deck";
const Addname = "Add Cards";
const playname = "Play";
const DD = "Delete Deck";
const Delname = "Delete Cards";



const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Homename}
        screenOptions={({ route }) => ({

         })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 20 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={ Homename} component={Homepage} />
        <Tab.Screen name={playname} component={playpage} />
        <Tab.Screen name={ad} component={ adddeck} />
        <Tab.Screen name={Addname} component={addcards} />
        <Tab.Screen name={DD} component={deletedeck} />
        <Tab.Screen name={Delname} component={deletecards} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;