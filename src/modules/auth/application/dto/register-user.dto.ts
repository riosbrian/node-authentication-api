import { z } from 'zod';

export const registerUserSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  password: z.string().min(8),
});

export type RegisterUserDTO = z.infer<typeof registerUserSchema>;
