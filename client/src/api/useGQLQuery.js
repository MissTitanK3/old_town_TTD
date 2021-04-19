import { useQuery } from 'react-query'
import { request } from 'graphql-request'


export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = 'https://oldetownarvada.org/wp-json/'
  // const endpoint = 'https://countries.trevorblade.com/'

  const fetchData = async () => await request(endpoint, query, variables)

  return useQuery(key, fetchData, config)
}