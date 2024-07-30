import { z } from "zod"

export interface UserData {
    id?: string,
    email: string,
    password: string
    name: string
    icon: string
}

export const userSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
    icon: z.string().optional()
});