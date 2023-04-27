import { StyleSheet, View,Text,TouchableOpacity,StatusBar, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import TitleItem from './components/TitleItem';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Scan from './components/Scan';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function Test1() {
  const [currentDate, setCurrentDate] = useState('');
    const nav = useNavigation();

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    return (
      <><ScrollView>
        <View style={styles.head}>
          <Text style={styles.text}>{currentDate}</Text>
          <TouchableOpacity style={styles.left} onPress={() => nav.openDrawer()}>
            <Icon name="bars" size={40} color="#053477" />
          </TouchableOpacity>
          <StatusBar />
        </View>
        <TitleItem/>
        <View style={styles.cadre}>

          <Text style={styles.connection}>Connection</Text>

        </View>
        <Scan/>
        

      </ScrollView><View style={styles.auteur}>
          <Text style={styles.connection}>By GODÉ</Text>
        </View></>
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
    background: {
      backgroundColor: 'red',
      padding: 30,
      borderRadius: 150,
      borderWidth: 1
  },
    text: {
      fontSize: 24,
      color: '#053477',
      marginLeft: 16,
  },
  connection: {
    fontSize: 30,
    color: 'red',
    marginLeft: 16,
  },
  auteur: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginBottom: 5,
    
  },
  cadre: {
    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        color: 'red',
        borderWidth: 4,
        borderRadius: 40,
        padding: 5,
        margin: 50,
        borderColor: '#053477',
        width: '90%',
        marginLeft: 16,
  },
    center: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heartRateTitleWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    heartRateTitleText: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginHorizontal: 20,
      color: "black",
    },
    heartRateText: {
      fontSize: 25,
      marginTop: 15,
    },
    ctaButton: {
      backgroundColor: "#FF6060",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginHorizontal: 20,
      marginBottom: 5,
      borderRadius: 8,
    },
    ctaButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
  });

  