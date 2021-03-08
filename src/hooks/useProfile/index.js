import { useReducer, useEffect } from "react";
import { getHiveProfile } from "../../api/bridge";

const useProfile = (type, username, observer) => {
  const initialState = {
    user: {},
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, posts: state.posts, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProfile = () => {
    getHiveProfile(username, observer).then((res) => {
      if (type === "base") {
        state.user = res.metadata.profile;
      } else {
        state.user = res;
      }
      dispatch({ type: "FETCHED" });
      return;
    });
  };

  return [state];
};

export default useProfile;
