import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUpdatedOnFieldToTodoEntity1552392671960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "updatedOn" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "updatedOn"`);
    }

}
