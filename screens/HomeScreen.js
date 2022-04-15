import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {List} from '../components/List';
import {WebApi} from '../components/WebApi';


const HomeScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  
  WebApi();

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {
        <List
          searchPhrase={searchPhrase}
          data={jsonData.contacts}
          setClicked={setClicked}
          navigation={navigation}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export{HomeScreen};
