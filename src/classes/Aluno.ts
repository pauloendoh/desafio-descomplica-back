import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Aluno {
  @Field()
  nome: string

  @Field()
  cpf: string

  @Field()
  email: string
}
