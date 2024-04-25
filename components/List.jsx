import { StyleSheet, View } from "react-native";
import { FlatList, TouchableOpacity, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useEffect, useState } from "react";

const List = ({ items, onDelete, onDone }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(items);
    }, [items])


    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={[styles.todoPost, item.checked && styles.todoPostPressed]}>
                        <TouchableOpacity style={{width: '80%'}} onPress={() => onDone(item.id)}>
                            <View style={styles.todoContent}>
                                <Text style={[styles.todoItem, item.checked && styles.todoItemPressed]}>{item.task}</Text>
                                <Text style={styles.todoDate}>{'today'}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onDelete(item.id)}>
                            <View style={styles.delete}>
                                        <Svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            stroke="black"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}>
                                            <Path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                                        </Svg>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        alignItems: 'center',

    },
    todoPost: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 700,
        padding: 20,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 2,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    todoPostPressed: {
        backgroundColor: '#93b8a8'
    },
    todoContent: {
        flex: 1,
    },
    todoItem: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    todoItemPressed: {
        textDecorationLine: 'line-through',
        color: 'gray',
        fontSize: 14,
    },
    todoDate: {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    delete: {
        fontSize: 24,
        color: 'red',
    }
});
