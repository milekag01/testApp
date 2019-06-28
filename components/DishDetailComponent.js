import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';

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

const RenderComments = (props) => {
    const comments = props.comments;

    const renderCommentItem = ({item,index}) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating}</Text>
                <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
            </View>
        );
    }

    return (
        <Card title='Comments'>
            <FlatList 
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class DishDetail extends React.Component {

    state = {
        dishes: DISHES,
        comments: COMMENTS
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
            <ScrollView>
                <RenderDish dish={this.state.dishes[+dishId]} />
                <RenderComments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
            
        );
    }
}

export default DishDetail;