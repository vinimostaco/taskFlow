import { UserRegister } from "../DTO/user.dto";
import { UserRepository } from "../repositories/user.repository";

export class UserService{
    constructor(private userRepository: UserRepository){}

    async register(userRegister: UserRegister){
        await this.userRepository.register(userRegister)
    }
}