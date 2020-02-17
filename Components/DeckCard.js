import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { pink, gray } from "../utils/colors";

const DeckCard = props => {
  const { title } = props;
  return (
    <View style={styles.deckCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>50</Text>
      <Text>Cards</Text>
    </View>
  );
};

export default DeckCard;

const styles = StyleSheet.create({
  deckCard: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: Platform.OS === "ios" ? 8 : 2,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    height: 150,
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    color: pink,
    fontWeight: "bold"
  },
  number: {
    color: gray,
    fontSize: 50
  }
});
