import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTable1626732111349 implements MigrationInterface {
    name = 'AddUserTable1626732111349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "currentHashedRefreshToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "currentHashedRefreshToken"`);
    }

}
