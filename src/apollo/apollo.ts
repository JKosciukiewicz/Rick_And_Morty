import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://rickandmortyapi.com/graphql',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()

  const query=gql`
        query {
        characters(page: 1, filter: { name: "rick" }) {
            info {
            count
            }
            results {
            name,
            species,
            gender,
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
  }).then(res=>console.log(res))

  export default apolloClient