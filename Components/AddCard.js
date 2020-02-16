import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { pink, white, gray } from "../helpers/colors";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  submitHandler = () => {
    //Verify if something is missing on the state and tell the user
    //Update the our "DB"
    //Update the store of the app
    // Clean the state
    // Go back / close the modal
  };

  render() {
    const { question, answer } = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Add a new card</Text>
          <Text
            style={{ color: gray, alignSelf: "flex-start", marginBottom: 50 }}
          >
            You can add more questions on your DECK here
          </Text>
          <View style={styles.formContainer}>
            <TextInput
              style={[styles.textInput, { marginBottom: 70 }]}
              placeholder="Your question here..."
              multiline={true}
              textAlignVertical="top"
              value={question}
            />
            <TextInput
              style={styles.textInput}
              placeholder="The correct answer here..."
              multiline={true}
              textAlignVertical="top"
              value={answer}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => this.submitHandler()}
              style={
                Platform.OS === "ios"
                  ? styles.iosSubmitBtn
                  : styles.androidSubmitBtn
              }
            >
              <Text style={{ color: white, fontSize: 20 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 20,
    marginTop: 50,
    flex: 1
  },
  headerText: {
    color: pink,
    fontSize: 20,
    fontWeight: "900",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10
  },
  formContainer: { flex: 2, width: `100%`, justifyContent: "flex-start" },
  btnContainer: { flex: 0, width: `100%`, justifyContent: "flex-end" },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: pink,
    paddingBottom: 10,
    width: "100%",
    fontSize: 17
  },
  iosSubmitBtn: {
    backgroundColor: pink,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  androidSubmitBtn: {
    backgroundColor: pink,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 45,
    alignSelf: "flex-end",
    justifyContent: "center"
  }
});
