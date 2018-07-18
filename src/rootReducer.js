import { combineReducers } from 'redux';
import home from './components/Home/homeReducer';

const rootReducer = combineReducers({
    home
});

export default rootReducer;
