import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('client')
export default class Client{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column() //faz automaticamente o mapeamento para varchar
    name: string;
    @Column()
    document: string;
    @Column()
    email:string;
    @Column()
    phone_number:string;
    @Column()
    address:string;
    @Column('int')
    years_old: number;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}

/**
 *                  {name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'},
                    {name: 'name', type: 'varchar'},
                    {name: 'document', type: 'varchar'},
                    {name: 'email', type: 'varchar'},
                    {name: 'phone_number', type: 'varchar'},
                    {name: 'address', type: 'varchar'},
                    {name: 'years_old', type: 'int'},
                    {name: 'created_at', type: 'timestamp', default: 'now()'},
                    {name: 'updated_at', type: 'timestamp', default: 'now()'}
 */