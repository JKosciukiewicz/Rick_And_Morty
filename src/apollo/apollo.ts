import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()

  const query=gql`
    query {
      characters{
        info {
          count
        }
        results {
          id,
          name,
          species,
          gender,
          image,    
        }
      }
    }
  `
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })

  apolloClient.query({
      query
  })

  export default apolloClient