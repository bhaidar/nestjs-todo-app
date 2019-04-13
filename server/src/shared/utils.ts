import { getConnectionOptions, getConnection } from 'typeorm';

export const toPromise = <T>(data: T): Promise<T> => {
  return new Promise<T>(resolve => {
    resolve(data);
  });
};

export const getDbConnectionOptions = async (
  connectionName: string = 'default',
) => {
  const options = await getConnectionOptions(
    process.env.NODE_ENV || 'development',
  );
  return {
    ...options,
    name: connectionName,
  };
};

export const getDbConnection = async (connectionName: string = 'default') => {
  return await getConnection(connectionName);
};

export const runDbMigrations = async (connectionName: string = 'default') => {
  const conn = await getDbConnection(connectionName);
  await conn.runMigrations();
};
