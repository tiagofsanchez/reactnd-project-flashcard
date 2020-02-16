import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { pink, white } from "../helpers/colors";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "height" : null}
      >
        <View style={styles.formContainer}>
          <Text style={{ color: pink, fontSize: 20 }}>Add Card</Text>
          <Text style={{ color: pink, fontSize: 20 }}>Add Card</Text>
          <TextInput style={styles.textInput} placeholder="Your question..." />
          <TextInput
            style={styles.textInput}
            placeholder="The correct answer..."
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.iosSubmitBtn
                : styles.androidSubmitBtn
            }
          >
            <Text style={{ color: white, fontSize: 20 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default AddCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 20,
    marginTop: 100,
    flex: 1
  },
  formContainer: { flex: 1, width: `100%` },
  btnContainer: { flex: 1, width: `100%` },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: pink,
    paddingBottom: 10,
    width: "100%",
    fontSize: 20
  },
  iosSubmitBtn: {
    backgroundColor: pink,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginRight: 40,
    marginLeft: 40,
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
