import { useFetch } from './hook/useFetch.js';

function App() {
  const { loading, data, error, errorMessage } = useFetch('/posts/1');

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error: {errorMessage}</p>;

  return (
    <div>
      <h1>게시글 정보</h1>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <p><strong>작성자 id:</strong> {data.userId}</p>
        </div>
      )}
    </div>
  );
}

export default App;
