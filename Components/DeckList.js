import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";

import { gray, pink } from "../helpers/colors";
import DeckCard from "./DeckCard";

const DeckList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Welcome to your Flashcard 🎴 App!!</Text>
        <Text style={{ color: gray }}>Check your decks below</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
        <DeckCard />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
        <DeckCard />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
        <DeckCard />
      </TouchableOpacity>
    </View>
  );
};

export default DeckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    color: pink,
    marginBottom: 15
  }
});
