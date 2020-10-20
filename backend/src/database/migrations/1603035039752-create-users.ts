import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1603035039752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({

      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',

        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,

        },
        {
          name: 'password',
          type: 'varchar',

        },
        {
          name: 'resetToken',
          type: 'varchar',
          default: false,
        },
        {
          name: 'resetTokenExpires',
          type: 'varchar',
          default: false,

        },
      ],

    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
