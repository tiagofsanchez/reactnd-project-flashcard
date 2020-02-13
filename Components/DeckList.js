import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

const DeckList = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
      }}>
      <View style={{alignItems: 'center'}}>
      <Text >Here you will see the Deck List</Text>
      </View>
      <TouchableOpacity
        style={styles.deckContainer}
        onPress={() => navigation.navigate('Deck')}>
        <Text>Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deckContainer}
        onPress={() => navigation.navigate('Deck')}>
        <Text>Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deckContainer}
        onPress={() => navigation.navigate('Deck')}>
        <Text>Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deckContainer}
        onPress={() => navigation.navigate('Deck')}>
        <Text>Deck</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deckContainer}
        onPress={() => navigation.navigate('Deck')}>
        <Text>Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeckList;

const styles = StyleSheet.create({
  deckContainer: {
    alignItems:'center',
    backgroundColor: 'white',
    borderRadius: Platform.OS === 'ios' ? 8 : 2,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
