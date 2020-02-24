import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import HomeStack from "./Components/HomeStack";
import NewDeck from "./Components/NewDeck";
import { pink, white } from "./utils/colors";
import { setLocalNotification } from "./utils/helpers";

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, composeWithDevTools())}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={pink} barStyle="light-content" />
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let icon;
                  if (route.name === "Add Deck") {
                    icon = (
                      <FontAwesome
                        name="plus-square"
                        size={size}
                        color={color}
                      />
                    );
                  } else if (route.name === "Home") {
                    icon = (
                      <Ionicons
                        name="ios-bookmarks"
                        size={size}
                        color={color}
                      />
                    );
                  }
                  return icon;
                }
              })}
              tabBarOptions={{
                activeTintColor: Platform.OS === "ios" ? pink : white,
                style: {
                  height: 80,
                  backgroundColor: Platform.OS === "ios" ? white : pink,
                  shadowColor: "rgba(0, 0, 0, 0.24)",
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowRadius: 6,
                  shadowOpacity: 1
                }
              }}
            >
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Add Deck" component={NewDeck} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

export default App;
