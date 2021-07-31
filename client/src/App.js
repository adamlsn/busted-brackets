import { ApolloProvider,ApolloClient,InMemoryCache,createHTTPLink } from '@apollo/client';
import Footer from './components/Footer';
import Header from './components/Header';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
function App() {
  return (
  <ApolloProvider client={client}>
    <div>
      <Header/>
      <div>
        Home content
      </div>
      <Footer/>
    </div>
  </ApolloProvider>
  );
}

export default App;
