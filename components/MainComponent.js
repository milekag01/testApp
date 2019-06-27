import React from 'react';
import {View} from 'react-native';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

class Main extends React.Component {
    
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = (dishId) => {
        this.setState({
            selectedDish: dishId
        });
    }

    render() {
        return (
            <View>
                <Menu dishes={this.state.dishes} 
                    onPress = {this.onDishSelect}
                />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
            
        );
    }
}

export default Main;