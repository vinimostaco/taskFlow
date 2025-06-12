import { AppDataSource } from "../config/datasource";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";

export function makeUserController(): UserController {
  const repo = new UserRepository(AppDataSource);
  const service = new UserService(repo);
  return new UserController(service);
}