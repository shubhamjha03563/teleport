import dotenv from "dotenv";
import { z } from "zod";

dotenv.config(); // Load from .env

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  DATABASE_URL: z.string().url("DATABASE_URL must be a valid URL"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("❌ Invalid environment variables:", result.error.format());
  process.exit(1); // Stop app
}

export const env = result.data;
