import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOwnerFieldToTodoEntity1555166680617
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "todo" ADD "ownerId" uuid`);
    await queryRunner.query(
      // tslint:disable-next-line: max-line-length
      `ALTER TABLE "todo" ADD CONSTRAINT "FK_05552e862619dc4ad7ec8fc9cb8" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "todo" DROP CONSTRAINT "FK_05552e862619dc4ad7ec8fc9cb8"`,
    );
    await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "ownerId"`);
  }
}
