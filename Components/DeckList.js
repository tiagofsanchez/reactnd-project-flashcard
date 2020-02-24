import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Platform
} from "react-native";

import { connect } from "react-redux";
import { getDecks, deleteAll } from "../utils/api";
import { receiveDecks, deleteAllDecksInStore } from "../actions";

import { gray, pink } from "../utils/colors";
import DeckCard from "./DeckCard";

//get the decks and put them in the store
class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  deleteAllHandler() {
    const { dispatch } = this.props;
    dispatch(deleteAllDecksInStore());
    deleteAll();
  }

  render() {
    const { navigation, deckTitles } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Welcome to your Flashcard 🎴 App!!</Text>
            <Text style={{ color: gray }}>Check your decks below</Text>
            <TouchableOpacity
              onPress={() => this.deleteAllHandler()}
              style={styles.delete}
            >
              <Text style={{ color: "red" }}>delete all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.decksListContainer}>
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
          </View>
        </View>
      </ScrollView>
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
    margin: 20
  },
  decksListContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: pink,
    marginBottom: 15
  },
  delete: {
    alignItems: "center",
    marginTop: 10
  }
});
