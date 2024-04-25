import { useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";

const Input = ({placeholder, onSubmitEditing}) => {
    const [text, setText] = useState('');
    const randomId = () => Math.random().toString();

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                ref={inputRef}
                style={styles.input}
                value={text}
                onChangeText={(value) => setText(value)}
                onSubmitEditing={() => {
                    if(!text) return
                    onSubmitEditing(text)
                    setText('');
                }}
                placeholder={placeholder}
                placeholderTextColor="rgba(126, 126, 126, 0.8)"/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: 300,
        height: 60,
        borderRadius: 15,
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 7,
        backgroundColor: 'white',
    }
})