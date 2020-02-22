import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native";

import { connect } from "react-redux";
import { getDecks, deleteAll } from "../utils/api";
import { receiveDecks } from "../actions";

import { gray, pink } from "../utils/colors";
import DeckCard from "./DeckCard";

//get the decks and put them in the store
class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
    const { navigation, deckTitles } = this.props;

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
          <Button title="deletei all" onPress={() => deleteAll()} />
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
