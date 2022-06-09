import { createModule, gql } from 'graphql-modules';

export const flightModule = createModule({
  id: 'flight-module',
  dirname: __dirname,
  typeDefs: [
    gql`
        type Query {
            flight: String
        }
    `,
  ],
  resolvers: {
    Query: {
      flight: (root: any, variables: any, context: any, info: any) => {
        console.log(info.cacheControl);
        return 'empty';
      },
    }
  },
});