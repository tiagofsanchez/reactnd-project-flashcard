import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gray, pink } from "../utils/colors";

const QuizResults = props => {
  const { correct, numberOfQuestions } = props;
  const result = (correct / numberOfQuestions) * 100;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You got</Text>
      <Text style={styles.scoreText}> {result} % </Text>
      <Text style={styles.text}>Correct</Text>
    </View>
  );
};

export default QuizResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  scoreText: { color: pink, fontSize: 40, fontWeight: "900" },
  text: { fontWeight: "900", fontSize: 20, color: gray }
});
