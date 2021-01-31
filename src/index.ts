import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import BandResolver from './resolvers/BandResolver';
import { buildSchema } from 'type-graphql';

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [BandResolver],
  });
  const server = new ApolloServer({ schema });
  await server.listen(5000);
  console.log('Server has started!');
}

main();
