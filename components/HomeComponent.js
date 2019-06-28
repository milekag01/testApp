import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';


//RenderItem functional component
const RenderItem = (props) => {
    const item = props.item;

    if(item!=null) {
        return (
            <Card
            featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={require('./images/elaicheesecake.png')}
            >
                <Text style={{margin: 10}}> 
                    {item.description} 
                </Text>     
            </Card>
        );

    } else {
        return (<View></View>);
    }
}

class Home extends React.Component {

    state = {
        dishes: DISHES,
        promotions: PROMOTIONS,
        leaders: LEADERS
    }
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
            <ScrollView>
                <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        )
    }
}

export default Home;