import { Request, Response } from "express";
    import { UserService } from "../services/user.service";

export class UserController{
    constructor(private userService: UserService){}

    async register(req: Request, res: Response){
        console.log(req.body)
        res.status(201).json({message: "Usuário registrado com sucesso"})
    }

    async login(req: Request, res: Response){
        res.status(200).json("Usuário logado")
    }
}