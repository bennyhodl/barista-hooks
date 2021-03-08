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
