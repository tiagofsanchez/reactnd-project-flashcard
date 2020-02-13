import React, { Component } from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";

import AddCard from "./AddCard";

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          presentationStyle="fullScreen"
        >
          <AddCard />
          <Button title="close" onPress={() => this.modalHandler()} />
        </Modal>
        <Text>My Deck will be here </Text>
        <TouchableOpacity onPress={() => this.modalHandler()}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
          <Text>Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

//Notes:
// onDismiss for the model doesn't wo
