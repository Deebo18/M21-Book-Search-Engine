// React and Apollo Client
import { gql } from '@apollo/client';

// Setup for User data and any saved book data loads in 'SavedBooks.js'
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;