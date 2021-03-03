import usePost from "../hooks/usePost";

const UsePost = () => {
  const [{ post, loading, error }, { getPost }] = usePost(
    "benny.blockchain",
    "sup-internet"
  );
  console.log(post);
  return (
    <>
      <button onClick={() => getPost()}>Click for data</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {post && <h1>{post.title}</h1>}
    </>
  );
};

export default UsePost;
