import z from "zod"

const ENV = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    SECRET_PASS: z.string(),
});

export default ENV.parse(process.env);