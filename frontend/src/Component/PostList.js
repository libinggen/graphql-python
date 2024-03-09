// frontend/src/Component/PostList.js
import { useQuery, gql } from "@apollo/client";
import './PostList.css';

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
    <div className="posts-container">
      {data.listPosts.posts.map(({ id, title, description }) => (
        <div key={id} className="post-item">
          <h3 className="post-title">{title}</h3>
          <p className="post-description">{description}</p> 
        </div>
      ))}
    </div>
  );
}
