import React, { useState } from 'react'
import {useQuery, useLazyQuery, gql} from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
      }
  }
`;

const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      name
      twoThumbsUp
    }
  }
`;
const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!){
    movie(name: $name){
    name
    }

  }
`;
function DisplayData() {
  const {movieSearch, setMovieSearched} = useState("");
  const {data, loading, error} = useQuery(QUERY_ALL_USERS);
  const {data: movieData } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, 
    {data: movieSearchData, error:movieError}, 
  ] = useLazyQuery(GET_MOVIE_BY_NAME);
  if (loading) {
    <h1>Data is Loading...</h1>
  }
  else if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data)
  }
  return (
    <div>
      {data && 
        data.users.map((user) => {
          return (
            <div>
              <h1>Name: {user.nameUser}</h1>
              <h1>UserName: {user.username}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Nationality: {user.nationality}</h1>
            </div>
          );
        })}
        {movieData && movieData.movies.map((movie) => {
          return <h1>Movie Name: {movie.name}</h1>
        })}

      <div>
          <input 
            type="text" 
            placeholder='interstellar...' 
            onChange={(event) => {
              setMovieSearched(event.target.value);
            }}
          />
          <button onClick={fetchMovie}> Fetch Movie</button>
          <div>

          </div>
        </div>
    </div>
  );
}

export default DisplayData