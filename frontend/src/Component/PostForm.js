// frontend/src/Component/PostForm.js
import { useMutation, gql } from '@apollo/client';
import './PostForm.css'; 

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $description: String!) {
    createPost(title: $title, description: $description) {
      post {
        id
        title
        description
      }
    }
  }
`;

export function PostForm() {
  let titleInput, descriptionInput;
  const [createPost, { data, loading, error }] = useMutation(CREATE_POST, {
    refetchQueries: [
      'AllPosts',
    ],
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div> 
      <form className="form-container"
        onSubmit={e => {
          e.preventDefault();
          createPost({ variables: { title: titleInput.value, description: descriptionInput.value } });
          titleInput.value = '';
          descriptionInput.value = '';
        }}
      >
        <input
          ref={node => {
            titleInput = node;
          }}
          type="text"
          placeholder="Title"
        />
        <textarea
          ref={node => {
            descriptionInput = node;
          }}
          placeholder="Description"
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
