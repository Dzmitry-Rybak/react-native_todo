import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Title = ({children}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    header: {
        padding: 10,
    }, 
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
  })