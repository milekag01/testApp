import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {dishes} from './dishes';
import {comments} from './comments';
import {promotions} from './promotions';
import {leaders} from './leaders';

import { composeWithDevTools } from 'redux-devtools-extension';    //for redux devtool

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishes,
            comments: comments,
            leaders: leaders,
            promotions: promotions
        }), composeWithDevTools(applyMiddleware(thunk,logger))
    );

    return store;
}