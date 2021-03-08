import hive from "@hiveio/hive-js";

export const getRankedPosts = async (sort, tag, observer) => {
  // @param {trending hot created promoted payout payout_comments muted} sort
  const params = {
    sort: sort,
    tag: tag,
    observer: observer,
  };
  const bridgeCall = await hive.api.callAsync(
    "bridge.get_ranked_posts",
    params
  );
  return bridgeCall;
};

export const getHiveProfile = async (account, observer) => {
  const params = {
    account,
    observer,
  };
  const bridgeCall = await hive.api.callAsync("bridge.get_profile", params);
  return bridgeCall;
};

export const getPopularCommunities = async (limit) => {
  const params = {
    limit,
  };
  const bridgeCall = await hive.api.callAsync(
    "bridge.list_pop_communities",
    params
  );
  return bridgeCall;
};

export const getFollowingFeed = async (sort, account, limit) => {
  const params = {
    sort,
    account,
    limit,
  };
  const bridgeCall = await hive.api.callAsync(
    "bridge.get_account_posts",
    params
  );
  return bridgeCall;
};
