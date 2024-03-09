import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClientProvider } from './ApolloClientSetup';
import { PostList } from './Component/PostList';
import { PostForm } from './Component/PostForm';

function App() {
  return (
    <ApolloClientProvider>
      <div>
        <h2>My Blog</h2>
        <PostForm />
        <PostList />
      </div>
    </ApolloClientProvider>
  );
}

export default App;
