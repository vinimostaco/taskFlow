import { DataSource } from "typeorm";
import { UserRegister } from "../DTO/user.dto";

export class UserRepository{
    constructor(private dataSource: DataSource){}

    async register(userRegister: UserRegister){
        return 'registrado'
    }
}