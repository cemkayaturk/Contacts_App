import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';
import { ListIcon } from './InitialIcon';


const List = (props) => {

  const Item = ({ name, title, onPress }) => (
    
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <ListIcon initials={name[0]} />
    <View style={styles.itemLeft}>
      <Text style={styles.titleL}>{name}</Text>
      <Text style={styles.details}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item, navigation }) => {
    // when no input, show all
    if (props.searchPhrase === '') {
      return (
        <Item
          onPress={() => {
            props.navigation.navigate('Profile');
            selectedItem=item;
            console.log(selectedItem);
          }}
          name={item.name}
          title={item.title}
        />
      );
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase())
    ) {
      return (
        <Item
          onPress={() => {
            props.navigation.navigate('Profile');
            selectedItem= item;
          }}
          name={item.name}
          title={item.title}
        />
      );
    }
    // filter of the description
    if (
      item.title
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase())
    ) {
      return (
        <Item
          onPress={() => {
            props.navigation.navigate('Profile');
            selectedItem=item;
          }}
          name={item.name}
          title={item.title}
        />
      );
    }
    // filter of the phone
    if (
      item.phone
        .toUpperCase()
        .includes(props.searchPhrase.toUpperCase())
    ) {
      return (
        <Item
          onPress={() => {
            props.navigation.navigate('Profile');
            selectedItem=item;
          }}
          name={item.name}
          title={item.title}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: '85%',
    width: '100%',
  },
  item: {
    padding: 15,
    backgroundColor: '#FFF',
    margin: 5,
    borderRadius: 20,
    flexDirection:"row",
    opacity: 0.9
  },
  titleL: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  listAvatar: {
    width: 56,
    height:56,
    opacity :1,
    borderRadius: 25,
    marginRight: 15,
  }
});

export {List};
