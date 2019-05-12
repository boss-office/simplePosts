import React, { useState } from "react";
import { connect } from "react-redux";
import { createhPost } from "../actions/postActions";
// import PropTypes from 'prop-types'

function Postform(props) {
  // const { createhPost } = props;
  const [state, setstate] = useState({
    title: "",
    body: ""
  });
  //   const [body, setbody] = useState("");

  function onChange(e) {
    // console.log("e : state", e.target);
    // console.log("key and value ", state);
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const post = { ...state };
    props.createhPost(post);
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title : </label>
          <br />
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={onChange}
          />
        </div>
        <br />
        <div>
          <label>Body : </label>
          <br />
          <textarea name="body" value={state.body} onChange={onChange} />
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

Postform.propTypes = {};

// const mapStateToProps = state => ({});

export default connect(
  null,
  { createhPost }
)(Postform);
