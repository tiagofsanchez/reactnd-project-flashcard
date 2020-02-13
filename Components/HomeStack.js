import React, { Fragment } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckList from './DeckList';
import Deck from './Deck';
import Quiz from './Quiz'
import AddCard from './AddCard'

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={DeckList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Deck" component={Deck} options={{ headerShown: false }}/>
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="AddCard" component={AddCard} />
        
      </Stack.Navigator>
    </Fragment>
  );
}

export default HomeStack;
