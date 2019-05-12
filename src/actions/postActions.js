import * as types from "./types";

// export function fetchPosts() {
//   return function(dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => dispatch({ type: types.FETCH_POSTS, payload: json }));
//   };
// }

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => dispatch({ type: types.FETCH_POSTS, payload: json }));
};

export const createhPost = postData => dispatch => {
  //   console.log("post data");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => dispatch({ type: types.NEW_POSTS, payload: data }));
};

export const clearPost = () => dispatch => {
  console.log("clearPost");
  dispatch({ type: types.CLEAR_NEW_POSTS, payload: [[], {}] });
};
