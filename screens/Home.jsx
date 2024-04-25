import { StyleSheet, Text, View } from 'react-native';
import { useReducer } from 'react';

import Title from '../components/Title';
import Input from '../components/Input';
import List from '../components/List';
import Head from '../components/Head';
import { initialState, reducer, actionCreators } from '../reducers/tasks';

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <View style={styles.container}>
                <Title>ToDo App</Title>
                <Head/>
                <Input placeholder='Type there...' onSubmitEditing={(newTodo) => dispatch(actionCreators.add(newTodo))}></Input>
                <Text style={{paddingVertical: 20, fontSize: 18, fontWeight: 'bold'}}>Your tasks:</Text>
            </View>
            <List 
                onDelete={(id) => dispatch(actionCreators.remove(id))}
                onDone={(id) => dispatch(actionCreators.done(id))} 
                items={state} />
        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});