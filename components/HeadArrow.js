import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeadArrow = () => {
    const [currentDate, setCurrentDate] = useState('');

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
        <View style={styles.container}>
            <TouchableOpacity style={styles.left}>
                <Image source={require('../assets/icone-fleche-gauche-noir.png')} style={{width: 50, height: 50}} />
            </TouchableOpacity>
            <Text style={styles.text}>{currentDate}</Text>
            <TouchableOpacity style={styles.left} 
            onPress={this.props.navigation.openDrawer}>
                <Icon name="bars" size={40} color="#053477" />
            </TouchableOpacity>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {  
        flexDirection: 'row',
        padding:  20,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 24,
        color: '#053477',
        marginLeft: 1,
    },
    left: {
        marginRight: 10,
        marginLeft: 10,
        
    },
});

export default HeadArrow;