import {MigrationInterface, QueryRunner} from "typeorm";

export class update21612164263409 implements MigrationInterface {
    name = 'update21612164263409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "dateFormed"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "rating" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "dateCommented" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "dateCommented"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "dateFormed" TIMESTAMP NOT NULL`);
    }

}
