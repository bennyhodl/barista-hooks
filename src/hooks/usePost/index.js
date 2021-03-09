import { useReducer, useEffect } from "react";
import { getDiscussion } from "../../api/condenser";

export default function usePost(author, link) {
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
  useEffect(() => {
    getPost();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPost = async () => {
    console.log(`In useP: ${author}`);

    getDiscussion(author, link).then((post) => {
      state.post = post;
      dispatch({ type: "FETCHED" });
    });
  };
  return [state, { getPost }];
}
