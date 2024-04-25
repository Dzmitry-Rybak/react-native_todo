import { View, Image, StyleSheet, Text } from "react-native";
import Logo from  '../assets/logo-human.jpeg';


const Head = () => {
    return (
        <View style={style.container}>
            <Image
                style={style.image}
                source={Logo}/>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hi, User👋</Text>
                    <Text style={{fontSize: 14}}>What would you like to do today?💡</Text>
                </View>
        </View>
    )
}

export default Head;

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 12,
    }
})