import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';


//RenderItem functional component
const RenderItem = (props) => {
    const item = props.item;

    if(item!=null) {
        return (
            <Card
            featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={{uri: baseUrl + item.image}}
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
                <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} />
                <RenderItem item={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} />
                <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

export default connect(mapStateToProps)(Home);