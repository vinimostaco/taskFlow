import {z} from "zod"
import "dotenv/config"

const _env = z.object({
    NODE_ENV: z.enum(['dev', 'prod']),
    PORT: z.string().default('3333')
})


const parsedEnv = _env.safeParse(process.env)

if (!parsedEnv.success) {
  console.error("❌ Erro ao validar variáveis de ambiente:", parsedEnv.error.format())
  throw new Error("Variáveis de ambiente inválidas.")
}

export const env = parsedEnv.data
