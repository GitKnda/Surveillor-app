import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";

const TitleItem = () => {
    const [fontsLoaded] = useFonts({
        'Bauhaus': require("../assets/fonts/Bauhaus93.ttf"),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <View style={styles.container}>
            <Text style={[styles.red]}>Surveillor</Text>
            <StatusBar style="auto" hidden={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        color: 'red',
        borderWidth: 4,
        borderRadius: 40,
        padding: 5,
        margin: 5,
        borderColor: 'red',
        width: '90%',
        marginLeft: 16,
    },
    red: {
        color: 'red',
        fontSize: 50,
        fontFamily: 'Bauhaus',

    },
});

export default TitleItem;