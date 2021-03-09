import hive from "@hiveio/hive-js/";

export const getDiscussion = async (author, permlink) => {
  const params = [author, permlink];
  const discussion = await hive.api.callAsync(
    "condenser_api.get_content",
    params
  );
  return discussion;
};
