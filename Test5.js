import { StyleSheet, View,Image,Text,TouchableOpacity,StatusBar, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import TitleItem from './components/TitleItem';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Test5() {
  const [currentDate, setCurrentDate] = useState('');
    const nav = useNavigation();

    useEffect(() => {
      var date = new Date().getDate(); //Current Date
      var month = new Date().getMonth() + 1; //Current Month
      var year = new Date().getFullYear(); //Current Year
      var hours = new Date().getHours(); //Current Hours
      var min = new Date().getMinutes(); //Current Minutes
      setCurrentDate(
          date + '/' + month + '/' + year
          + ' ' + hours + ':' + min
      );
  }, []);

    return (
      <ScrollView>
        <View style={styles.head}>
            <TouchableOpacity style={styles.left}>
                <Image source={require('./assets/icone-fleche-gauche-noir.png')} style={{width: 50, height: 50}} />
            </TouchableOpacity>
            <Text style={styles.text}>{currentDate}</Text>
            <TouchableOpacity style={styles.left} onPress={() => nav.openDrawer()}>
                <Icon name="bars" size={40} color="#053477" />
            </TouchableOpacity>
            <StatusBar />
        </View>
        <TitleItem style={styles.center} />
        <View style={styles.container}>
          
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    head: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: '#808080',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
    left: {
        marginRight: 16,
        
    },
    text: {
      fontSize: 24,
      color: '#053477',
      marginLeft: 16,
  },
    center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
