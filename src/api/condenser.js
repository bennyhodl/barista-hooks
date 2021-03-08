import hive from "@hiveio/hive-js";

export const getProfileFeed = async (account, start_entry_id, limit) => {
  const params = [account, start_entry_id, limit];
  const hiveCall = await hive.api.callAsync("condenser_api.get_feed", params);
  return hiveCall;
};
