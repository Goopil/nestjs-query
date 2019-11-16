// this is needed to create a query builder in typeorm :(
import { Connection, createConnection, getConnection } from 'typeorm';
import { TestEntity } from './test.entity';

export function createTestConnection(): Promise<Connection> {
  return createConnection({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [TestEntity],
    synchronize: true,
    logging: false
  });
}

export function closeTestConnection(): Promise<void> {
  return getConnection().close();
}

export function getTestConnection(): Connection {
  return getConnection();
}
