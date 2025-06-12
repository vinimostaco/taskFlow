import {z} from "zod";

export const UserRegisterDto = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  role: z.enum(['admin', 'user'], {
    errorMap: () => ({ message: "Tipo de usuário inválido (admin ou user)" })
  })
});

export type UserRegister = z.infer<typeof UserRegisterDto>
