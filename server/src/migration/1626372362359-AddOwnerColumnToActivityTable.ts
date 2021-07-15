import {MigrationInterface, QueryRunner} from "typeorm";

export class AddOwnerColumnToActivityTable1626372362359 implements MigrationInterface {
    name = 'AddOwnerColumnToActivityTable1626372362359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "createdOn" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedOn" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "activity" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "activity" ADD CONSTRAINT "FK_2e32cff695a62ac42865ea087e2" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity" DROP CONSTRAINT "FK_2e32cff695a62ac42865ea087e2"`);
        await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedOn"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdOn"`);
    }

}
