import * as React from "react";
import { StatusBar, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./Components/HomeStack";
import NewDeck from "./Components/NewDeck";
import { pink } from "./helpers/colors";

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppStatusBar backgroundColor={pink} barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Add Deck" component={NewDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
