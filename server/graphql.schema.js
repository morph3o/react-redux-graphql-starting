import {makeExecutableSchema} from 'graphql-tools';
import resolvers from './graphql.resolvers';

const typeDefs = `
  type Person {
    id: ID!
    name: String!
  }
  
  type Query {
    allPeople: [Person!]!
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
