import React from 'react';
import {View, FlatList} from 'react-native';
import {Tile} from 'react-native-elements';

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
class Menu extends React.Component {
    
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
                <Tile
                    key={index}
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('DishDetail', {dishId: item.id})}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        const { navigate } = this.props.navigation; 
    
        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes
    }
}

export default connect(mapStateToProps)(Menu);