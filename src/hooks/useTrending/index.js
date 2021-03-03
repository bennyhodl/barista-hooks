import { useReducer, useEffect } from "react";
import { getTrending } from "../../api/hive";

export default function useTrending(tag) {
  const initialState = {
    trending: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        console.log("FETCHING");
        return {
          ...state,
          loading: true,
        };
      case "FETCHED":
        return {
          ...state,
          trending: state.trending,
          loading: false,
        };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: true };
    }
  };
  useEffect(() => {
    fetchTrending();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTrending = () => {
    getTrending(tag).then((res) => {
      const trending = [];

      res.map((post) => {
        trending.push(post);
      });

      state.trending = trending;

      dispatch({ type: "FETCHED" });
      return;
    });
  };
  return [state, { fetchTrending }];
}
