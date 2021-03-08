import { useReducer, useEffect } from "react";
import { getFollowingFeed } from "../../api/bridge";

const useFollowingFeed = (sort, account, limit) => {
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
    getFollowingFeed(sort, account, limit).then((res) => {
      state.feed = res;
      dispatch({ type: "FETCHED" });
      return;
    });
  };
  return [state];
};
export default useFollowingFeed;

// bridge.get_account_posts
// Lists posts related to a given account.

// sort - Supported values:
// blog - top posts authored by given account (excluding posts to communities - unless explicitely reblogged) plus reblogs ranked by creation/reblog time
// feed - top posts from blogs of accounts that given account is following ranked by creation/reblog time, not older than last month
// posts - op posts authored by given account, newer first comments - replies authored by given account, newer first
// replies - replies to posts of given account, newer first
// payout - all posts authored by given account that were not yet cashed out
// account: account name, points to valid account
// start_author: author account name, if passed must be passed with start_permlink [optional]
// start_permlink: post permlink of given author, point to valid post, paging mechanism [optional]
// limit: if omitted the server will use the default value of 20 [optional]
// observer: ignored for blog, feed and replies, otherwise when passed has to point to valid account used to fill blacklist stats and mark posts of authors blacklisted by observer, at this time ignored [optional]
