import axios from "axios";


export const POSTS_ACTION_TYPES = {
    FETCHING: "POSTS/FETCHING",
    ON_FETCH_SUCCESS: "POSTS/ON_FETCH_SUCCESS",
    ON_FETCH_FAILURE: "POSTS/ON_FETCH_FAILURE",
  
  };

  export const onFetching = () => {
    return {
      type: POSTS_ACTION_TYPES.FETCHING,
    };
  };
  
  export const onFetchPostsSuccess = (data) => {
    return {
      type: POSTS_ACTION_TYPES.ON_FETCH_SUCCESS,
      payload: data,
    };
  };
  
  
  
  export const onFetchingPosts = () => {
    return (dispatch) => {
      dispatch(onFetching());
      axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          if (res) {
            dispatch(onFetchPostsSuccess(res.data.splice(0, 6),));
           
          } else {
           console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };