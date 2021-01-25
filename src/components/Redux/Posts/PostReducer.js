import {POSTS_ACTION_TYPES} from './PostsAction'




const initialState = {
  isAddedPosts:false,
  posts:[],
  error:{},
  
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case POSTS_ACTION_TYPES.FETCHING:
        return {
          ...state,
         
        };
    case POSTS_ACTION_TYPES.ON_FETCH_SUCCESS:
      return {
        ...state,
        isAddedPosts:true,
        posts:action.payload
      }
    default:
      return state;
  }
}