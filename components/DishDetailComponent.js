import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';

const RenderDish = (props) => {
    const dish = props.dish;

    if(dish!=null) {
        return  (
            <Card 
                featuredtitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            
            </Card>
        );
    } else {
        return (
            <View></View>
        );
    }

}

class DishDetail extends React.Component {

    state = {
        dishes: DISHES
    };

    static navigationOptions = {
        title: 'Dish Details',
        headerStyle: {
            backgroundColor: '#ea1744'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId','');

        return (
            <RenderDish dish={this.state.dishes[+dishId]} />
        );
    }
}

export default DishDetail;