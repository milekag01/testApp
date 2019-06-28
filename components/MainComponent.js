import React from 'react';
import {View, Platform} from 'react-native';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';


//styles should be given individually to every screen of stack
const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name='menu' size={24}
                            color='#fff'
                            onPress={() => navigation.toggleDrawer()} />
        })

    },
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
});

//home navigator(stack wala to get status bar)
const HomeNavigator = createStackNavigator({
    Home: {screen: Home,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name='menu' size={24}
                            color='#fff'
                            onPress={() => navigation.toggleDrawer()} />
        })
    }
});

const ContactNavigator = createStackNavigator({
    Contact: {screen: Contact,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name='menu' size={24}
                            color='#fff'
                            onPress={() => navigation.toggleDrawer()} />
        })
    }
});

const AboutNavigator = createStackNavigator({
    About: {screen: About,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Icon name='menu' size={24}
                            color='#fff'
                            onPress={() => navigation.toggleDrawer()} />
        })
    }
});

//creating a drawer navigator
const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
                <Icon	
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor } />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({tintColor}) => (
                <Icon	
                    name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor } />
            )
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact',
            drawerIcon: ({tintColor}) => (
                <Icon	
                    name='address-card'
                    type='font-awesome'
                    size={24}
                    color={tintColor } />
            )
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({tintColor}) => (
                <Icon	
                    name='info-circle'
                    type='font-awesome'
                    size={24}
                    color={tintColor } />
            )
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