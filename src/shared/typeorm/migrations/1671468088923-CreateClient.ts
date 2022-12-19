import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClient1671468088923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'client',
                columns: [
                    {name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'name', type: 'varchar'},
                    {name: 'document', type: 'varchar'},
                    {name: 'email', type: 'varchar'},
                    {name: 'phone_number', type: 'varchar'},
                    {name: 'address', type: 'varchar'},
                    {name: 'years_old', type: 'int'},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('client');
    }

}
