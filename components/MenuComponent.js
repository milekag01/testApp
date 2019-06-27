import React from 'react';
import {View, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

class Menu extends React.Component {
    
    state = {
        dishes: DISHES
    };

    static navigationOptions = {
        title: 'Menu',
        headerStyle: {
            backgroundColor: '#ea1744'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };
    render() {
        const renderMenuItem = ({item,index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                    leftAvatar={{source: require('./images/uthappizza.png')}}
                />
            );
        };

        const { navigate } = this.props.navigation; 
    
        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
    
}

export default Menu;