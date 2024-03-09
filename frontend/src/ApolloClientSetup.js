import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

// Replace `YOUR_GRAPHQL_ENDPOINT` with your actual GraphQL endpoint URL
const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:5000/graphql',
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
