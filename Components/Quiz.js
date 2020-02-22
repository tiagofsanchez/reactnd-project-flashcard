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
    showAnswer: false,
    showQueryResults: false
  };

  showResponseHandler() {
    this.setState(prevState => ({
      ...prevState,
      showAnswer: !prevState.showAnswer
    }));
  }

  correctHandler() {
    const { index } = this.state;
    const { numberOfQuestions } = this.props;

    if (index + 1 < numberOfQuestions) {
      this.setState(prevState => ({
        ...prevState,
        index: prevState.index + 1,
        correct: prevState.correct + 1
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        showQueryResults: true
      }));
    }
  }

  wrongHandler() {
    const { index } = this.state;
    const { numberOfQuestions } = this.props;

    if (index + 1 < numberOfQuestions) {
      this.setState(prevState => ({
        ...prevState,
        index: prevState.index + 1
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        showQueryResults: true
      }));
    }
  }

  render() {
    const { route, numberOfQuestions, questions, navigation } = this.props;
    const { title } = route.params;
    const { index, showAnswer, showQueryResults } = this.state;

    console.log(this.props);

    //if the you don't have any questions in your card
    if (numberOfQuestions === 0) {
      return (
        <View style={styles.container}>
          <DeckCard title={title} />
          <View
            style={[styles.questionContainer, { justifyContent: "center" }]}
          >
            <Text style={{ fontSize: 30, textAlign: "center", padding: 20 }}>
              NO CARDS! Go and add some
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: "flex-end",
              flex: 1,
              alignItems: "center"
            }}
          >
            <Text style={styles.goBack}>Go back</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DeckCard title={title} />
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>
            {index + 1}/{numberOfQuestions}
          </Text>
          {showQueryResults ? (
            <View style={styles.questionFormat}>
              <Text>RESULTS COMPONENT</Text>
            </View>
          ) : showAnswer ? (
            <View style={styles.questionFormat}>
              <Text>{questions[index].answer}</Text>
            </View>
          ) : (
            <View style={styles.questionFormat}>
              <Text>{questions[index].question}</Text>
            </View>
          )}

          <TouchableOpacity onPress={() => this.showResponseHandler()}>
            <Text style={styles.checkFormat}>Check response</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnGroupContainer}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => this.correctHandler()}
          >
            <Ionicons name="ios-checkmark-circle" color={"green"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => this.wrongHandler()}
          >
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
  container: { margin: 20, flex: 1, justifyContent: "flex-start" },
  questionContainer: {
    height: 300,
    width: "90%",
    backgroundColor: white,
    borderColor: pink,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 20,
    alignItems: "center"
  },
  questionNumber: {
    alignSelf: "flex-end",
    padding: 5,
    marginBottom: 5,
    color: pink,
    fontWeight: "900"
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
  },
  goBack: {
    color: pink,
    fontWeight: "900",
    fontSize: 15
  }
});
