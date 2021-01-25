import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { onFetchingPosts } from "../Redux/Posts/PostsAction";
import { Card, TextField, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

let allCommentsData = [
  {
    id: 1,
    body: "abc dsnnd bbsgb",
  },
  {
    id: 2,
    body: "kjhdfhfj",
  },
];
let allPostsData = [
  {
    id: 1,
    title: "title1",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 2,
    title: "title2",
    body:
      "kjhdfhfj abc quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
  {
    id: 3,
    title: "title3",
    body: " ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit ndhd hdhdhhd",
  },
  {
    id: 4,
    title: "title4",
    body: "kjhdfhfj abc dsnnd bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
  {
    id: 5,
    title: "title5",
    body: "kjhdfhfj abc dsnnd bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
  {
    id: 6,
    title: "title6",
    body: "kjhdfhfj abc dsnnd bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
  {
    id: 7,
    title: "title7",
    body: "kjhdfhfj abc dsnnd bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
  {
    id: 8,
    title: "title8",
    body: "kjhdfhfj abc dsnnd bbsgb vnnnnnnyydddg ndhd hdhdhhd",
  },
];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      comments: "",
      isCommented: false,
      commentData: [],
      allcomments: [],
      statusvalue: "pending",
      clicked: false,
      id: "",
      title: "",
      body: "",
      contenttitle: "",
    };
  }

  componentDidMount() {
    this.props.onFetchingPosts();
    // axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
    //   // const comments = res.data;
    //   console.log(res.data.splice(0,3))
    //   this.setState({ allcomments : res.data.splice(0,1)});

    // });
  }
  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  _onSubmit = (value) => {
    console.log(value);
    const contenttitle = value;
    const { comments } = this.state;
    console.log(comments);
    this.setState({
      commentData: [...this.state.commentData, comments],
    });
    this.setState({
      isCommented: true,
      contenttitle: contenttitle,
    });
  };
  handleChangeCheckbox = (e) => {
    const { completed } = this.state;
    this.setState({
      completed: !completed,
      statusvalue: "Moderate",
    });
  };
  onChangebox = (data) => {
    const newid = data.id;
    const newtitle = data.title;
    const newbody = data.body;
    this.setState({
      clicked: true,
      id: newid,
      title: newtitle,
      body: newbody,
    });
  };

  render() {
    const postsData = this.props.posts.posts.splice(0, 1);
    const NewPostData = this.props.posts.posts;
    console.log(NewPostData);

    const {
      comments,
      commentData,
      allcomments,
      statusvalue,
      clicked,
      id,
      title,
      body,
      isCommented,
      contenttitle,
    } = this.state;
    console.log(postsData);
    console.log(commentData);
    return (
      //   <React.Fragment>
      //     <div>
      //     {postsData.map(item=>(
      //  <Card style={{width:'500px'}} key={item.id}>
      //    <h1>{item.title}</h1>
      //    <CardContent>
      //    <p>{item.body}</p>
      //    <br />
      //    <div>

      //    Comment: <TextField
      //    type="text"
      //    label="Enter Username"
      //    value={comments}
      //    name="comments"
      //    onChange={this._onHandleChange}
      //  />

      //    </div>

      //    <Button className="mt-2"variant="contained"  onClick={this._onSubmit}>Add Comment</Button>

      //    <br />

      //    { allcomments.map(item1 => (
      //      <div key={item1.id}>
      //      <p>Commenter Name {item1.id} : </p>
      //      <p>{item1.name} </p></div>
      //       ))
      //    }

      //    </CardContent>
      //    </Card>

      //     ))
      //     }

      //     </div>
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <div className="section1" style={{ width: "500px" }}>
              {allPostsData.map((item) => (
                <div key={item.id} className="mt-2 mb-2">
                  <Card>
                    <h2
                      onClick={this.onChangebox.bind(this, item)}
                      className="ml-2"
                    >
                      {item.title}{" "}
                    </h2>
                    <hr />
                    <CardContent>
                      <div className="row">
                        <div className="col-6">
                          <Typography> comments:</Typography>
                          {isCommented && contenttitle == item.title ? (
                            <div>
                              <p>{commentData}</p>
                            </div>
                          ) : null}
                        </div>
                        <div className="col-3">
                          Status:
                          <span className="text-muted"> {statusvalue} </span>
                        </div>
                        <div className="col-2 ml-1">
                          <input
                            className="ml-3"
                            type="checkbox"
                            value={this.state.completed}
                            defaultChecked={this.state.completed}
                            onChange={this.handleChangeCheckbox}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <br />
            <br />
          </div>
          <div col-md-4>
            <div
              id="section2"
              className={clicked ? "d-block ml-5 mt-2" : "d-none"}
            >
              <Card style={{ width: "500px" }} key={id}>
                <h1 className="text-center">{title}</h1>
                <hr />
                <CardContent>
                  <Typography>{body}</Typography>
                  <br />
                  <hr />
                  <div>
                    <h6>Add Your Comments Here:</h6>
                    <TextField
                      type="text"
                      value={comments}
                      name="comments"
                      onChange={this._onHandleChange}
                      style={{ width: "100%" }}
                    />
                  </div>

                  <Button
                    className="mt-5"
                    variant="contained"
                    color="primary"
                    onClick={this._onSubmit.bind(this, title)}
                  >
                    Add Comment
                  </Button>

                  <br />
                  {isCommented ? (
                    <div>
                      <p>CommenterName</p>
                      <p>{commentData}</p>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { onFetchingPosts })(withRouter(Posts));
