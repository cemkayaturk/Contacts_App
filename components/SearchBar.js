import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
  Keyboard
} from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = (props) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View
          style={
            !props.clicked
              ? styles.searchBar__unclicked
              : styles.searchBar__clicked
          }>
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={props.searchPhrase}
            onChangeText={props.setSearchPhrase}
            onFocus={() => {
              props.setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {props.clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                props.setSearchPhrase('');
              }}
            />
          )}
        </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
        {props.clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                props.setClicked(false);
              }}></Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {SearchBar};


