import { useReducer, useEffect } from "react";
import { getProfileFeed } from "../../api/condenser";

const useProfileFeed = (account, start_entry_id, limit) => {
  const initialState = {
    feed: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFeed = () => {
    getProfileFeed(account, start_entry_id, limit).then((res) => {
      console.log(res);
      state.feed = res;
      dispatch({ type: "FETCHED" });
      return;
    });
  };
  return [state];
};
export default useProfileFeed;
