import { useReducer, useEffect } from "react";
import { getPopularCommunities } from "../../api/bridge";

const usePopularCommunities = (limit) => {
  const initialState = {
    communities: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, loading: false };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: true };
    }
  };
  useEffect(() => {
    getPopComm();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPopComm = async () => {
    getPopularCommunities(limit).then((res) => {
      state.communities = res;
      dispatch({ type: "FETCHED" });
      return;
    });
  };
  return [state];
};

export default usePopularCommunities;
