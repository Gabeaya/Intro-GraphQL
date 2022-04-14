import React from 'react'
import {useQuery, gql} from "@apollo.client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      }
  }
`
function DisplayData() {
  const {} = useQuery(QUERY_ALL_USERS);
  return (
    <div>User List</div>
  )
}

export default DisplayData