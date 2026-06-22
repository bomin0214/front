import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function App() {
  const queryClient = useQueryClient();
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => 
      fetch('http://localhost:3000/posts').then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: () =>
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: `새로운 게시글 ${Date.now()}`,
        }),
      }). then((res) => res.json()),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    }
  });

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <div>
      <h1>게시글 목록</h1>
      <button onClick={() => mutation.mutate()}>게시글 작성</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
} 
