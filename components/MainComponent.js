import React from 'react';
import {View, Platform} from 'react-native';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';



//styles should be given individually to every screen of stack
const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
});

//home navigator(stack wala to get status bar)
const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
});

//creating a drawer navigator
const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
},{
    drawerBackgroundColor: '#f7f7f7'
});

//react navigation v3
const Container = createAppContainer(MainNavigator);

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