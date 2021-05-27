import { Query, Resolver } from "type-graphql"

@Resolver()
export class HelloResolver {
  @Query(() => String) // query returns string
  hello() {
    return "hello world"
  }
}
