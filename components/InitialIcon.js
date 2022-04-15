import React from 'react';
import {
    Text,
    View,
  } from 'react-native';


const ListIcon = ({ initials }) => {
    return (
      <View
        style={{
          backgroundColor: '#87bdd8',
          alignItems: 'center',
          justifyContent: 'center',
          width: 56,
          height: 56,
          opacity: 1,
          borderRadius: 25,
          marginRight: 15,
        }}>
        <Text style={{ color: 'white', fontSize: 25 }}>{initials}</Text>
      </View>
    );
  };
  const DetailIcon = ({ initials }) => {
    return (
      <View
        style={{
          backgroundColor: '#87bdd8',
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
          height: 120,
          opacity: 1,
          borderRadius: 25,
          marginRight: 15,
        }}>
        <Text style={{ color: 'white', fontSize: 70 }}>{initials}</Text>
      </View>
    );
  };

  export {ListIcon,DetailIcon};