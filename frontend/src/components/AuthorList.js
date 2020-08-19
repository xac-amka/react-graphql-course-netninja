import React from 'react';
import { useQuery, gql } from '@apollo/client';

const query = gql`
  {
    authors{
        name
        age
    }
  }
`;

const AuthorList = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
      <h1>Hello</h1>
  )
}

export default AuthorList;