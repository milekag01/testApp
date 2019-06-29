import React from 'react';
import {View, Platform, Image, StyleSheet, Text, ScrollView} from 'react-native';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import {createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-elements';

import {connect} from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreators';

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

// custom drawer content showing branding
//safeAreaView is specifically for iphone X
const CustonDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{top:'always', horizontal: 'never'}}>

            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo.png')}
                        style={styles.drawerImage}/>

                </View>
                <View style={{flex:2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Lapinos</Text>
                </View>
            </View>

           <DrawerItems {...props} />
        
        </SafeAreaView>
    </ScrollView>
);

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
    drawerBackgroundColor: '#f7f7f7',
    contentComponent: CustonDrawerContentComponent
});

//react navigation v3
const Container = createAppContainer(MainNavigator);

class Main extends React.Component {
    
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchLeaders();
        this.props.fetchPromos();
    }

    render() {
        return (
            <View style={{flex: 1}}>
               <Container />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#ea1744',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
        fetchLeaders: () => dispatch(fetchLeaders()),
        fetchPromos: () => dispatch(fetchPromos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);