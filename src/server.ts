import "reflect-metadata"
import { ApolloServer } from "apollo-server-express"
import * as express from "express"
import { HelloResolver } from "./resolvers/hello"
import { buildSchema } from "type-graphql"

const main = async () => {
  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  })

  apolloServer.applyMiddleware({ app })

  const PORT = 8000
  app.get("/", (req, res) => res.send("Express + TypeScript Server 2"))
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
  })
}

main().catch((err) => {
  console.error(err)
})
