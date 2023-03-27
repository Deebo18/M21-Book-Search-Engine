const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    title: String
    image: String
    link: String 
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
}

  type Auth {
      token: ID!
      user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookdata: BookInput): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;