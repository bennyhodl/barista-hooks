import useTrending from "../hooks/useTrending";

const UseTrending = () => {
  const [{ trending, loading, error }, { fetchTrending }] = useTrending("");

  console.log(trending);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <>
      <button onClick={() => fetchTrending()}>Click for data</button>
      {trending &&
        trending.map((post) => {
          return <h1>{post.author}</h1>;
        })}
    </>
  );
};

export default UseTrending;
