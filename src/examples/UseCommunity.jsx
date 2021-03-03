import useCommunity from "../hooks/useCommunity";

const UseCommunity = () => {
  const [{ community, loading, error }, { fetchCommunity }] = useCommunity("");

  console.log(community);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <>
      <button onClick={() => fetchCommunity()}>Click for data</button>
      {community &&
        community.map((post) => {
          return <h1>{post.author}</h1>;
        })}
    </>
  );
};

export default UseCommunity;
