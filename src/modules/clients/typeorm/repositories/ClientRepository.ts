import { EntityRepository, Repository } from "typeorm";
import Client from "../entities/Client";

@EntityRepository(Client)
export default class ClientRepository extends Repository<Client>{
    public async findByName(name: string): Promise<Client | undefined>{
        const client = this.findOne({
            where: { name }
        })
        return client;
    }
}