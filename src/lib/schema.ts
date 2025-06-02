import { z } from "zod"

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  email: z.string().min(8).max(50).regex(/@/),
  message: z.string().min(10).max(2000),
});