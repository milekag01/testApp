import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {Card, Icon} from 'react-native-elements';

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

const RenderDish = (props) => {
    const dish = props.dish;

    if(dish!=null) {
        return  (
            <Card 
                featuredtitle={dish.name}
                image={{uri: baseUrl + dish.image}}
            >
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
                <Icon 
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color= '#f50'
                    onPress={() => props.favorite ? console.log('Already Favorite') : props.onPress()}
                />
            
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
        favorites: []
    };

    markFavorite(dishId) {
        this.setState({
            favorites: this.state.favorites.concat(dishId)
        });
    }

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
                <RenderDish 
                    dish={this.props.dishes.dishes[+dishId]} 
                    favorite={this.state.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}    
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
            </ScrollView>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

export default connect(mapStateToProps)(DishDetail);