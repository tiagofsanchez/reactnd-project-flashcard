import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DeckList from "./DeckList";
import Deck from "./Deck";
import Quiz from "./Quiz";

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={DeckList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Fragment>
  );
}

export default HomeStack;
