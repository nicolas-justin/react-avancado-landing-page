import { GraphQLClient } from 'graphql-request';

const port = 1337;
const protocol = 'http';
const domain = 'localhost';
const url = `${protocol}://${domain}:${port}/graphql`;

export default new GraphQLClient(url);
