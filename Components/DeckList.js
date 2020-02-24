import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";

import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

import { gray, pink } from "../utils/colors";
import DeckCard from "./DeckCard";

//get the decks and put them in the store
class DeckList extends Component {
  state = {
    del: false
  };

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  deleteAll() {
    const { dispatch } = this.props;
    const { del } = this.state;
    this.setState(prevSate => ({
      ...prevSate,
      del: true
    }));

    AsyncStorage.clear().then(
      getDecks().then(decks => dispatch(receiveDecks(decks)))
    );
  }

  render() {
    const { navigation, deckTitles } = this.props;
    console.log(this.state.del);

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Welcome to your Flashcard 🎴 App!!</Text>
            <Text style={{ color: gray }}>Check your decks below</Text>
          </View>
          {deckTitles.map(title => {
            return (
              <TouchableOpacity
                key={title}
                onPress={() => navigation.navigate("Deck", { title: title })}
              >
                <DeckCard title={title} />
              </TouchableOpacity>
            );
          })}
          <Button title="delete all" onPress={() => this.deleteAll()} />
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  const deckTitles = Object.keys(decks);

  return {
    deckTitles,
    decks
  };
}

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: pink,
    marginBottom: 15
  }
});
