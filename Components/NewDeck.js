import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function NewDeck() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="ios-folder" size={100} />
        <Text>Create a New Deck</Text>
      </View>
      <View style={styles.btnContainer}>
        <input></input>
        <TouchableOpacity
          style={Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  iosBtn: {
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginRight: 40,
    marginLeft: 40
  },
  androidBtn: {
    backgroundColor: "pink",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 45,

    justifyContent: "center"
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
