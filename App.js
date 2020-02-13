import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./Components/HomeStack";
import NewDeck from "./Components/NewDeck";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Add Deck" component={NewDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
