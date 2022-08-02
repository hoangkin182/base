import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTableTodo1659150915626 implements MigrationInterface {
    name = 'alterTableTodo1659150915626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS \`TblUser\` (\`createdOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`createdByUserId\` varchar(255) NULL, \`lastModifiedOnDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`lastModifiedByUserId\` varchar(255) NULL, \`deletedAt\` datetime(6) NULL, \`id\` varchar(36) NOT NULL, \`userAccount\` varchar(255) NOT NULL, \`userPassword\` varchar(255) NOT NULL, \`isActive\` tinyint NULL, \`mpath\` varchar(255) NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`todo_entity\` DROP COLUMN \`isDone\``);
        await queryRunner.query(`ALTER TABLE \`todo_entity\` ADD \`isDone\` tinyint NOT NULL DEFAULT 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`todo_entity\` DROP COLUMN \`isDone\``);
        await queryRunner.query(`ALTER TABLE \`todo_entity\` ADD \`isDone\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`TblUser\``);
    }

}
