import React from 'react';
import {View, Text} from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#ea1744'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };

    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        )
    }
}

export default Home;