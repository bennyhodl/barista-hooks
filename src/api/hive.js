import hive from "@hiveio/hive-js/";

export const getDiscussion = async (author, permlink) => {
  const params = [author, permlink];
  const discussion = await hive.api.callAsync(
    "condenser_api.get_content",
    params
  );
  return discussion;
};

export const getTrending = async (tag) => {
  const params = { limit: 20, tag: tag };
  const trending = await hive.api.callAsync(
    "condenser_api.get_discussions_by_trending",
    params
  );
  return trending;
};
