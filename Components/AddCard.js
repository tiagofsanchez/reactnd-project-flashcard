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

import { pink, white, gray } from "../helpers/colors";

//Given that TextInput doesn't support name property
//I need to create a component that does that for us

const TextInputComponent = ({ value, name, onChangeText, ...props }) => (
  <TextInput
    value={value}
    onChangeText={value => onChangeText(value, name)}
    {...props}
  />
);

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    errorMessage: false
  };

  changeTextHandler = (value, name) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  submitHandler = () => {
    const { question, answer, errorMessage } = this.state;
    const { closeCard } = this.props;

    //Verify if something is missing on the state and tell the user
    if (question === "" || answer === "") {
      this.setState(prevState => ({
        ...prevState,
        errorMessage: !errorMessage
      }));
    }

    //Update the our "DB"
    //Update the store of the app
    // Clean the state

    // Go back / close the modal
    if ((errorMessage === false) & (question !== " ") & (answer !== "")) {
      closeCard();
    }
  };

  render() {
    const { question, answer, errorMessage } = this.state;
    console.log(this.state);

    let showMessage = null;
    if (errorMessage === true) {
      showMessage = (
        <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 18 }}>
          ☝️ missing something ☝️
        </Text>
      );
    }

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
            <TextInputComponent
              style={[styles.textInput, { marginBottom: 70 }]}
              placeholder="Your question here..."
              multiline={true}
              textAlignVertical="top"
              value={question}
              name={"question"}
              onChangeText={(value, name) =>
                this.changeTextHandler(value, name)
              }
            />
            <TextInputComponent
              style={styles.textInput}
              placeholder="The correct answer here..."
              multiline={true}
              textAlignVertical="top"
              value={answer}
              name={"answer"}
              onChangeText={(value, name) =>
                this.changeTextHandler(value, name)
              }
            />
          </View>
          <View style={styles.btnContainer}>
            {showMessage}
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
