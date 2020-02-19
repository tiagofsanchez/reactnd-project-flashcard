import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { pink, gray, white } from "../utils/colors";
import DeckCard from "./DeckCard";

class Quiz extends Component {
  state = {
    index: 0,
    correct: 0,
    showAnswer: false
  };

  responseHandler() {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: !prevState.showAnswer
    }));
  }

  render() {
    const { route, numberOfQuestions, questions } = this.props;
    const { title } = route.params;
    const { index, showAnswer } = this.state;

    console.log(showAnswer);

    if (numberOfQuestions === 0) {
      return (
        <View style={styles.container}>
          <DeckCard title={title} />
          <Text>NO CARDS! Go and add some</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DeckCard title={title} />
        <View style={styles.questionContainer}>
          {showAnswer ? (
            <View style={styles.questionFormat}>
              <Text>{questions[index].answer}</Text>
            </View>
          ) : (
            <View style={styles.questionFormat}>
              <Text>{questions[index].question}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => this.responseHandler()}>
            <Text style={styles.checkFormat}>Check response</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroupContainer}>
          <TouchableOpacity style={styles.btnContainer}>
            <Ionicons name="ios-checkmark-circle" color={"green"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer}>
            <Ionicons name="ios-close-circle" color={"red"} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks, { route }) {
  const deck = decks[route.params.title];
  const numberOfQuestions = deck.questions.length;
  return {
    deck,
    numberOfQuestions,
    questions: deck.questions
  };
}

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  container: { margin: 20, flex: 1, justifyContent: "space-evenly" },
  questionContainer: {
    height: 300,
    width: "90%",
    backgroundColor: white,
    borderColor: pink,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    alignSelf: "center",
    padding: 30,
    marginTop: 20,
    alignItems: "center"
  },
  questionFormat: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: "#F5F5F5",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  checkFormat: {
    fontWeight: "900",
    color: pink
  },
  btnGroupContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },
  btnContainer: {
    flex: 1,
    textAlign: "center",
    borderColor: pink,
    borderWidth: 2,
    margin: 5,
    height: 45,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  }
});
