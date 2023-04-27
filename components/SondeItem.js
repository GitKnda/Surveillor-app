import { StyleSheet, Text, View } from 'react-native';

const SondeItem = () => {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
            <Text style={styles.text}>XX°C</Text>
        </View>
        <Text style={styles.text2}>Sonde n°x</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 5,
      borderWidth: 2
    },
    background: {
        backgroundColor: 'red',
        padding: 30,
        borderRadius: 150,
        borderWidth: 1
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2: {
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
  });

export default SondeItem;