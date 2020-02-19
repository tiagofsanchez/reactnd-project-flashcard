import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { pink, gray } from "../utils/colors";
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
          <Text>
            {showAnswer ? questions[index].answer : questions[index].question}
          </Text>
          <TouchableOpacity onPress={() => this.responseHandler()}>
            <Text style={styles.checkFormat}>Check response</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text>✅</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>👎</Text>
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
  container: { margin: 20, flex: 1, justifyContent: "flex-start" },
  questionContainer: {
    height: 300,
    width: "90%",
    borderColor: gray,
    borderWidth: 1,
    alignSelf: "center",
    padding: 30,
    marginTop: 20,
    borderRadius: Platform.OS === "ios" ? 8 : 2,
    alignItems: "center",
    justifyContent: "space-between"
  },

  checkFormat: {
    fontWeight: "900",
    color: pink
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30
  }
});
