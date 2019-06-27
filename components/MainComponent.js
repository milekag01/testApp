import React from 'react';
import {View, Platform} from 'react-native';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createAppContainer} from 'react-navigation';



//styles should be given individually to every screen of stack
const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
});

//react navigation v3
const Container = createAppContainer(MenuNavigator);

class Main extends React.Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
               <Container />
            </View>
            
        );
    }
}

export default Main;