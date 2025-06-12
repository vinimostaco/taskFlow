import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("usuarios_email_key", ["email"], { unique: true })
@Index("usuarios_pkey", ["id"], { unique: true })
@Entity("usuarios", { schema: "public" })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "email", unique: true, length: 150 })
  email: string;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("character varying", { name: "role", length: 50 })
  role: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;
}
