import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import Band from '../entity/Band';
const bands = require('./bands.json');

export default class CreateBands implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Band)
      .values([
        {
          bandName: bands[0].bandName,
          dateFormed: new Date(bands[0].dateFormed),
        },
      ])
      .execute();
  }
}
