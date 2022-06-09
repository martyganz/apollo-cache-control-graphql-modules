import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginCacheControl, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { app } from './app';

const schema = app.createSchemaForApollo();

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginCacheControl({
            calculateHttpHeaders: false,
        }),
        ApolloServerPluginLandingPageGraphQLPlayground,
    ]
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});