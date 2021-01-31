import {MigrationInterface, QueryRunner} from "typeorm";

export class intial1612089473157 implements MigrationInterface {
    name = 'intial1612089473157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "dateFormed" TIMESTAMP NOT NULL, "bandId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "bandName" character varying NOT NULL, "dateFormed" TIMESTAMP NOT NULL, CONSTRAINT "PK_9355783ed6ad7f73a4d6fe50ea1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "members_band_bands" ("membersId" uuid NOT NULL, "bandsId" uuid NOT NULL, CONSTRAINT "PK_03f99a59ea786ceae0749e0715b" PRIMARY KEY ("membersId", "bandsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc754a4aa8c26fbb4858bca374" ON "members_band_bands" ("membersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_49cffeca00d6bd27369570c762" ON "members_band_bands" ("bandsId") `);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_bd8444ea5d4ea3bfc5cc495980b" FOREIGN KEY ("bandId") REFERENCES "bands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members_band_bands" ADD CONSTRAINT "FK_dc754a4aa8c26fbb4858bca3746" FOREIGN KEY ("membersId") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "members_band_bands" ADD CONSTRAINT "FK_49cffeca00d6bd27369570c7628" FOREIGN KEY ("bandsId") REFERENCES "bands"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "members_band_bands" DROP CONSTRAINT "FK_49cffeca00d6bd27369570c7628"`);
        await queryRunner.query(`ALTER TABLE "members_band_bands" DROP CONSTRAINT "FK_dc754a4aa8c26fbb4858bca3746"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_bd8444ea5d4ea3bfc5cc495980b"`);
        await queryRunner.query(`DROP INDEX "IDX_49cffeca00d6bd27369570c762"`);
        await queryRunner.query(`DROP INDEX "IDX_dc754a4aa8c26fbb4858bca374"`);
        await queryRunner.query(`DROP TABLE "members_band_bands"`);
        await queryRunner.query(`DROP TABLE "members"`);
        await queryRunner.query(`DROP TABLE "bands"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
