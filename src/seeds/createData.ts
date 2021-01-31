import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm-connection';
import Band from '../entity/Band';
const bands = require('./bands.json');

export default class CreateBands implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Band)
      .values([{}])
      .execute();
  }
}
