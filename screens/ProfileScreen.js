import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking
} from 'react-native';
import {DetailIcon} from '../components/InitialIcon';


const ProfileScreen = ({ navigation }) => {

  
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View style={styles.detailContainer}>
        <DetailIcon initials={selectedItem.name[0]} />
        <View>
          <Text style={styles.detailHeader}>{selectedItem.name}</Text>
          <Text style={styles.detailHeader2}>{selectedItem.title}</Text>
        </View>
      </View>

        <TouchableOpacity style={styles.detailInfo} 
        onPress={() => Linking.openURL(`tel:${selectedItem.phone}`)}>
          <Image
          style={styles.detailIcon}
          source={require('../assets/phone.jpg')}
          />
          <Text style={styles.detailText}>{selectedItem.phone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailInfo} 
        onPress={() => Linking.openURL(`mailto:${selectedItem.email}`)}>
          <Image
          style={styles.detailIcon}
          source={require('../assets/email.jpg')}
          />
          <Text style={styles.detailText}>{selectedItem.email}</Text>
        </TouchableOpacity>

    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    
  },
  detailContainer:{
    paddingLeft: 25,
    paddingTop: 20,
    flexDirection:"row",
    paddingBottom: 40
  },
  detailAvatar:{
    height:120,
    width:120,
    opacity :1,
    borderRadius: 60,
    marginRight: 15,
  },
  detailHeader:{
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  detailHeader2:{
    paddingTop: 25,
    fontSize: 16,
    fontStyle: 'italic',
  },
  detailInfo:{

    padding: 12,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 20,
    flexDirection:"row",
    opacity: 0.8
  },
  detailText:{
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  detailIcon:{
    width: 24,
    height:24,
    opacity :1,
    borderRadius: 15,
    marginRight: 15,
  }
});

export {ProfileScreen};
