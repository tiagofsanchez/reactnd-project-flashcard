import React, { Component } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";

import { deleteDeck } from "../utils/api";
import { deleteDeckInStore } from "../actions";
import { pink, white, gray } from "../utils/colors";
import AddCard from "./AddCard";
import DeckCard from "./DeckCard";

class Deck extends Component {
  state = {
    modalVisible: false
  };

  modalHandler() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  deleteDeckHandler() {
    const { navigation, route, dispatch } = this.props;
    const { title } = route.params;
    console.log(title);

    //delete in DB
    deleteDeck(title);
    //Go Back HOME
    navigation.navigate("Home");
    //Delete in store
    dispatch(deleteDeckInStore(title));
    //goBack
  }

  render() {
    const { navigation, route } = this.props;
    const { modalVisible } = this.state;

    const { title } = route.params;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <DeckCard title={title} />
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            presentationStyle="fullScreen"
          >
            <AddCard title={title} closeCard={() => this.modalHandler()} />
          </Modal>
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            NOTE: Description of the deck, but I still need to implement it on
            the "DB" and on the store
          </Text>
          <TouchableOpacity
            style={{ marginTop: 20, alignItems: "center" }}
            onPress={() => this.deleteDeckHandler()}
          >
            <Text style={{ color: "red" }}>delete deck</Text>
          </TouchableOpacity>
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
              onPress={() => navigation.navigate("Quiz", { title: title })}
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

export default connect()(Deck);

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
