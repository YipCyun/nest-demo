import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1602640571254 implements MigrationInterface {
    name = 'migration1602640571254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "age" double precision NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "createDateTime" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "lastChangedDateTime" SET DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "lastChangedDateTime" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "createDateTime" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "age"`);
    }

}
