import { useReducer } from "react";
import { getDiscussion } from "../../api/hive";

export default function usePost(author, link) {
  const actions = {
    FETCHING: "FETCHING",
    FETCHED: "FETCHED",
    FETCHING_ERROR: "FETCHING_ERROR",
  };
  const initialState = {
    post: {},
    loading: true,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true, error: false };
      case "FETCHED":
        return { ...state, loading: false, error: false };
      case "FETCH_ERROR":
        return { ...state, post: {}, loading: false, error: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getPost = async () => {
    console.log(`In useP: ${author}`);
    dispatch({ type: actions.FETCHING });
    getDiscussion(author, link).then((post) => {
      state.post = post;
      console.log(state.post);
      dispatch({ type: actions.FETCHED });
      console.log(state.post);
    });
  };
  return [state, { getPost }];
}
