import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Head = () => {
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
        <View style={styles.container}>
            <Text style={styles.text}>{currentDate}</Text>
            <TouchableOpacity style={styles.left} onPress={() => nav.openDrawer()}>
                <Icon name="bars" size={40} color="#053477" />
            </TouchableOpacity>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 24,
        color: '#053477',
        marginLeft: 16,
    },
    left: {
        marginRight: 16,
        
    },
});

export default Head;
