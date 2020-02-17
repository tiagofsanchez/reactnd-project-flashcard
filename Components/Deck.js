import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  StyleSheet,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { pink, white, gray } from "../helpers/colors";
import AddCard from "./AddCard";
import DeckCard from "./DeckCard";

class Deck extends Component {
  state = {
    modalVisible: false
  };

  modalHandler() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { navigation } = this.props;
    const { modalVisible } = this.state;
    console.log(this.state);

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <DeckCard />
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            presentationStyle="fullScreen"
          >
            <AddCard closeCard={() => this.modalHandler()} />
          </Modal>
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            NOTE: Description of the deck, but I still need to implement it on
            the "DB" and on the store
          </Text>
          <View style={styles.btnGroupContainer}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => this.modalHandler()}
            >
              <Ionicons name="ios-photos" size={30} color={gray} />
              <View style={[styles.btnContainer, { marginBottom: 10 }]}>
                <Text style={styles.btnText}>Add Card </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("Quiz")}
            >
              <Ionicons name="ios-fitness" size={30} color={gray} />
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>Quiz</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnGroupContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btnContainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: pink,
    marginLeft: 20,
    padding: 10,
    borderRadius: 7,
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 20
  }
});

//Notes: onDismiss for the modal doesn't work, why is that so?
