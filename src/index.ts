import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Band } from './entity/Band';

createConnection()
  .then(async (connection) => {
    console.log('Inserting a new user into the database...');
    const band = new Band();
    band.bandName = 'Timber';
    band.dateFormed = new Date();
    await connection.manager.save(band);
    console.log('Saved a new user with id: ' + band.id);

    console.log('Loading users from the database...');
    const bands = await connection.manager.find(band);
    console.log('Loaded users: ', bands);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch((error) => console.log(error));
