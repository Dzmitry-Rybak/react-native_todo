import { SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home.jsx';
import Account from './screens/Account.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: '#d9d9d9', flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator
                    options={{ tabBarLabel: () => null }}
                    screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if(route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if(route.name === 'Account') {
                            iconName = focused ? 'person' : 'person-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                    tabBarShowLabel: false,
                    title: null,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#d9d9d9', borderTopWidth: 1, borderTopColor: 'black'},
                    })}
                >
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Account" component={Account}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};