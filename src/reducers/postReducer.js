import * as types from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case types.NEW_POSTS:
      return {
        ...state,
        items: [action.payload,...state.items, ],
        item: action.payload
      };
    case types.CLEAR_NEW_POSTS:
      return {
        ...state,
        items: action.payload[0],
        item: action.payload[1]
      };
    default:
      return state;
  }
}
