import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, clearPost } from "../actions/postActions";
// import PropTypes from 'prop-types'

function Posts(props) {
  // const { posts } = props;
  const [postData, setpostData] = useState();
  // const [count, setCount] = useState(0);
  // const [isLoading, setisLoading] = useState(true);
  // const [fetchData, setfetchData] = useState();
  // const [formatData, setformatData] = useState(null);

  // async function FetchData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const json = await response.json();
  //   setfetchData(json);
  //   setisLoading(false);
  // }

  // useEffect(() => {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(response => response.json())
  //   .then(json => setFetchData(json));
  // console.log("Fetching Data");
  // async function fetchData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   const json = await response.json();
  //   setFetchData(json);
  // }
  // FetchData();
  // input variable if that change it will call this effect
  // }, [count, constantState]);
  // }, []);

  // useEffect(() => {
  // console.log("is Loading : ", isLoading);
  // Update the document title using the browser API
  // document.title = `You clicked ${count} times`;
  // FetchData ? FormatData({ FetchData }) : console.log("loading data");
  // !isLoading
  // ? // ? setformatData(
  //     fetchData.map(post => (
  //       <div key={post.id}>
  //         <h3>{post.title}</h3>
  //         <p>post.body</p>
  //       </div>
  //     ))
  //   )
  // setformatData(FormatData({ post: fetchData }))
  // : setformatData(<h1>Data Is loading</h1>);
  // }, [fetchData, isLoading]);

  function handleOnclick() {
    props.ClearPost();
    // setCount(count + 1);
    // document.title = `Title Change ${count} times`;
  }

  useEffect(() => {
    console.log("Hello World this is Effect");
    // function FetchData() {
    // fetchPosts();
    // setfirstLoad(false);
    // }
    // FetchData();
    props.fetchPosts();
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // !firstLoad && FetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function FormatData({ posts }) {
    const returnData = posts.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ));
    return returnData;
  }

  useEffect(() => {
    // console.log("posts : ", props.posts);
    setpostData(props.posts);
  }, [props.posts]);

  // useEffect(() => {
  // console.log("newPost isEmpty : ", isEmpty(props.newPost));
  // console.log("postData : ", postData);
  // if (!isEmpty(props.newPost) && postData) {
  // const { newPost } = props;
  //   setpostData([props.newPost, ...postData]);
  // }
  // console.log("posts : ", props.posts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.newPost]);
  // }, [postData, props.newPost]);

  // function isEmpty(obj) {
  //   return Object.keys(obj).length === 0;
  // }

  return (
    <div>
      <button onClick={handleOnclick}>Clear Post</button>
      {/* <p>Hello World</p> */}
      {/* <p>You clicked {count} times</p> */}
      {postData && FormatData({ posts: postData })}
    </div>
  );
}

Posts.propTypes = {};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

const mapDispatchToProps = {
  fetchPosts,
  ClearPost: clearPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
// export default Posts;
