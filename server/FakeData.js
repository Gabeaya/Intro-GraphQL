const UserList = [
  {
    id: 1,
    name: "john",
    username: "JOJOO",
    age: 20,
    nationality: "Canada",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "Pedi",
        age: 21,
        nationality: "Brazil",
      }, 
      {
        id: 4,
        name: "Yammen",
        username: "JOInsJOO",
        age: 19,
        nationality: "Pakistan",
      }
    ]
  },
  {
    id: 2,
    name: "Pedro",
    username: "Pedi",
    age: 21,
    nationality: "Brazil",
    friends: [

    ]
  }, 
  {
    id: 3,
    name: "darrell",
    username: "dman",
    age: 33,
    nationality: "Ethiopia",
  },
  {
    id: 4,
    name: "Yammen",
    username: "JOInsJOO",
    age: 19,
    nationality: "Pakistan",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Superbad",
    release: 2007,
    twoThumbsUp: true,
  },
  {
    id: 2,
    name: "Batman",
    release: 2022,
    twoThumbsUp: true,
  },
  {
    id: 3,
    name: "The Dark and The Twisted",
    release: 2020,
    twoThumbsUp: false,
  },
  {
    id: 4,
    name: "Interstellar",
    release: 2007,
    twoThumbsUp: true,
  },
];

module.exports = { UserList, MovieList};