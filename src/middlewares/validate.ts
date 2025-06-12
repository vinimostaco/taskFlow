import { ZodSchema } from "zod"
import { RequestHandler } from "express"

export const validateBody = (schema: ZodSchema): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      res.status(400).json({
        message: "Erro de validação",
        errors: result.error.format(),
      })
      return
    }

    req.body = result.data
    next()
  }
}
