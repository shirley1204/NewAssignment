import {combineReducers} from 'redux'
import postsReducer from './Posts/PostReducer'


export default combineReducers({
    posts:postsReducer,
   
    
})