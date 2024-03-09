import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query AllPosts {
    listPosts {
      success
      errors
      posts {
        id
        title
        description
        created_at
      }
    }
  }
`;

export function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.listPosts.posts.map(({ id, title, description }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
