import {Static, Type} from "@sinclair/typebox"
import envSchema from "env-schema";

const schema = Type.Object({
    PORT: Type.Number({
        default: 4000,
    }),
    HOST: Type.String({
        default: "0.0.0.0",
    }),
    DATABASE_URL: Type.String()
})


type Env = Static<typeof schema>

export const config = envSchema<Env>({
    schema,
    dotenv: true
})