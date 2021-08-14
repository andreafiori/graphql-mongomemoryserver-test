const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    users: [User!]!,
    user(id: Int!): User!
  }

  type User {
    id: ID!
    name: String!
    email: String
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    published: Boolean!
    link: String
    author: User!
  }

  input UserInput {
    id: Int!
    name: String!
    email: String!
  }
  
  type Mutation {
    addUser(user: [UserInput]): User!
    editUser(user: [UserInput]): User!
  }
`);

module.exports = schema;