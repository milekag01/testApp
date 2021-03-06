import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {ListItem, Card} from 'react-native-elements';;

import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
class About extends React.Component {

    static navigationOptions = {
        title: 'About Us',
        headerStyle: {
            backgroundColor: '#ea1744'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    };


    render() {

        const renderLeaderList = ({item,index}) => {
            return (
                <ListItem 
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        return (
            <ScrollView>
                <Card title='Our History'>
                    <Text>
                        Started in 2010, Ristorante con Fusion 
                        quickly established itself as a culinary 
                        icon par excellence in Hong Kong. With its  
                        unique brand of world fusion cuisine that can  
                        be found nowhere else, it enjoys patronage from 
                        the A-list clientele in Hong Kong.  Featuring four 
                        of the best three-star Michelin chefs in the world, 
                        you never know what will arrive on your plate the 
                        next time you visit us.
                    </Text>
                    
                    <Text>
                        The restaurant traces its humble beginnings to The 
                        Frying Pan, a successful chain started by our CEO, 
                        Mr. Peter Pan, that featured for the first time the 
                        world's best cuisines in a pan.
                    </Text>
                </Card>

                <Card title='Corporate Leadership'>
                    <FlatList 
                        data={this.props.leaders.leaders}
                        renderItem={renderLeaderList}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>

            </ScrollView>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        leaders: state.leaders
    }
}

export default connect(mapStateToProps)(About);