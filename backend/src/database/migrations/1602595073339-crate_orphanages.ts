import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class crateOrphanages1602595073339 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(new Table({
      name: 'orphanages',
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
          name: 'latitude',
          type: 'decimal',
          // scale: 10,
          // precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          // scale: 10,
          // precision: 2,
        },
        {
          name: 'about',
          type: 'text',

        },
        {
          name: 'instructions',
          type: 'text',

        },
        {
          name: 'phone',
          type: 'varchar',

        },
        {
          name: 'opening_hours',
          type: 'varchar',

        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
        {
          name: 'pending',
          type: 'boolean',
          default: true,
        },
        {
          name: 'markerMap',
          type: 'varchar',
          default: false,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
    await queryRunner.query('DROP EXTENSION IF NOT EXISTS "uuid-ossp"');
  }
}
