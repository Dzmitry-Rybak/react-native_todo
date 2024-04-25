import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import apple from '../assets/apple-logo.png';
import google from '../assets/google-logo.png';
import git from '../assets/git-logo.png';

const Account = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create Account 🕵</Text>
            {/* <Text>You can register on our ToDo App to create your own tasks</Text> */}
            <View style={{
                    // width: (Dimensions.get('window').width > 500) ? 500 : 300, 
                    width: '100%',
                    maxWidth: 500,
                    alignSelf: 'center'
                    }}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Username"/>
                <TextInput
                    style={styles.textinput}
                    placeholder="Email"/>
                <TextInput
                    style={styles.textinput}
                    secureTextEntry={true}
                    placeholder="Passwod"/>
                <TouchableOpacity style={styles.submitForm}>
                    <Text style={{fontSize: 22}}>Continue</Text>
                </TouchableOpacity>
            </View>
            <Text style={{alignSelf: 'center', marginVertical: 35}}>Or, log in using your existing account:</Text>
            <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconLogin}>
                    <Image
                        style={{width: 25, height: 25, alignSelf: 'center'}}
                        source={apple}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLogin}>
                    <Image
                        style={{width: 25, height: 25, alignSelf: 'center'}}
                        source={google}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLogin}>
                    <Image
                        style={{width: 25, height: 25, alignSelf: 'center'}}
                        source={git}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    header: {
        marginBottom: 50,
        fontSize: 35,
        alignSelf: 'center'
    },
    textinput: {
        height: 60,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 5,
        backgroundColor: 'white',
    },
    submitForm: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: '#f8d36d',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100vw'
    },
    iconLogin: {
        backgroundColor: 'white',
        width: '30%',
        justifyContent: 'center',
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
    }
});