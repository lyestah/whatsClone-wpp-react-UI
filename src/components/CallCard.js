import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons'


export default function CallCard({
    userName,
    avatar
}) {


  return (
    <>
      <View style={styles.card}>
        <Image style={styles.avatar} source={avatar}/>
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>{userName}</Text>
            <View style={styles.nameIcon}>
                <Arrow name='arrow-top-right' size={15} color={'#25D366'}/>
                <Text style={styles.callTime}>há 10 minutos</Text>
            </View>
          </View>
          <Icon name='telephone' size={30} style={styles.telephone}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 6,
      height: 75,
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row'
    },
  
    avatar: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginHorizontal: 15
    },
  
    info: {
      marginLeft: 1,
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      width: '70%',
      borderBottomWidth: 0.6,
      borderBottomColor: '#ccc',
      justifyContent: 'space-between',
    },
    
    name: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 18,
      top: -4
    },
  
    callTime: {
      color: '#666',
      fontSize: 15,
      marginHorizontal: 5
    },
  
    telephone: {
      alignSelf: "center",
      color: '#075e54',
    },

    nameIcon:{
        flexDirection: 'row',
        alignItems: 'center'
    }
  })
