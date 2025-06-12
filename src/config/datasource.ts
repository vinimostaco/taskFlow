import { DataSource } from "typeorm";
import { Usuarios } from "./entities/Usuarios";

export const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "teste",
    password: "admin123",
    database: "taskflow",
    entities: [Usuarios],
    synchronize: false,
    logging: true,
})

