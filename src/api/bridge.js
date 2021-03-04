import hive from "@hiveio/hive-js";

/**
 * @param {trending hot created promoted payout payout_comments muted} sort
 * @param {any hive tag} tag
 * @param {account viewing posts} observer
 *
 * ! Check for valid sortOrder param
 */

export const getRankedPosts = async (sort, tag, observer) => {
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
