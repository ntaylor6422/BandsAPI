import {MigrationInterface, QueryRunner} from "typeorm";

export class updatev61612187516079 implements MigrationInterface {
    name = 'updatev61612187516079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" character varying NOT NULL, "dateCommented" TIMESTAMP NOT NULL, "bandId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bands" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dateFormed" TIMESTAMP NOT NULL, CONSTRAINT "PK_9355783ed6ad7f73a4d6fe50ea1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_bd8444ea5d4ea3bfc5cc495980b" FOREIGN KEY ("bandId") REFERENCES "bands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_bd8444ea5d4ea3bfc5cc495980b"`);
        await queryRunner.query(`DROP TABLE "bands"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
