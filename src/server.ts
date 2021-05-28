import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import * as express from "express"
import { buildSchema } from "type-graphql"
import { AlunoResolver } from "./resolvers/AlunoResolver"

const runServer = async () => {
  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AlunoResolver],
    }),
  })

  apolloServer.applyMiddleware({ app })

  const PORT = 8000
  app.listen(8000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
  })
}

runServer().catch((err) => {
  console.error(err)
})
