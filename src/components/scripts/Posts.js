import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    onFetchingPosts
} from "../Redux/Posts/PostsAction";
import {Card,TextField,Button} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          completed: false,
        comments:"",
        isCommented:false,
        commentData:[],
        allcomments: [],
        statusvalue:"pending",
        };
      }
    componentDidMount() {
        this.props.onFetchingPosts();
        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
          // const comments = res.data;
          console.log(res.data.splice(0,3))
          this.setState({ allcomments : res.data.splice(0,1)});
         
        });
      }
      _onHandleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
      _onSubmit = () => {
        const { comments} = this.state;
        console.log(comments);
        this.setState({
            isCommented:true,
            commentData:comments,
            

        });
        
      };
      handleChangeCheckbox = (e) =>{
        const{completed} = this.state;
        this.setState({
          completed:!completed,
          statusvalue:"Moderate"
        })
      }
    
    

    render() {
        const postsData = this.props.posts.posts.splice(0,1)
     
     
        const { comments,commentData, allcomments,statusvalue} = this.state;
        console.log(postsData)
        console.log(commentData)
        return (
          <React.Fragment>
            <div>
            {postsData.map(item=>(
         <Card style={{width:'500px'}} key={item.id}>
           <h1>{item.title}</h1>
           <CardContent>
           <p>{item.body}</p>
           <br />
           <div>
           
           Comment: <TextField
           type="text"
           label="Enter Username"
           value={comments}
           name="comments"
           onChange={this._onHandleChange}
         />

           </div>

           <Button className="mt-2"variant="contained"  onClick={this._onSubmit}>Add Comment</Button>

           <br />
           
           { allcomments.map(item1 => (
             <div key={item1.id}>
             <p>Commenter Name {item1.id} : </p>
             <p>{item1.name} </p></div>
              ))
           }
         
           

           </CardContent>
           </Card>
           
            ))
            }
          
                
            </div>
            <div className="section1" style={{width:'500px'}}>
            { postsData.map(item => (

              <div key={item.id}>
              
              <h2>{item.title} </h2></div>
               ))
            }

            { allcomments.map(item1 => (

              <div key={item1.id}>
              <div className="row">
              <div className="col-6">
              <p>Commenter Name {item1.id} : </p>
              <p>{item1.name} </p>
              </div>
              <div className="col-3">
              status:{statusvalue}
              </div>
              <div className="col-2">
              <input className="ml-3"
              type="checkbox"
              value={this.state.completed}
              defaultChecked={this.state.completed}
            onChange={this.handleChangeCheckbox}
            />
              </div>
              </div>
              </div>
               ))
            }
            </div>

            <div className="section2" style={{width:'500px'}}>
            { postsData.map(item => (

              <div key={item.id}>
              
              <h2>{item.title} </h2></div>
               ))
            }

            { allcomments.map(item1 => (

              <div key={item1.id}>
              <div className="row">
              <div className="col-6">
              <p>Commenter Name {item1.id} : </p>
              <p>{item1.name} </p>
              </div>
              <div className="col-3">
              status:Moderate
              </div>
              
              </div>
              </div>
               ))
            }
            </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      posts: state.posts,
    };
  }

  export default connect(mapStateToProps, { onFetchingPosts })(withRouter(Posts));