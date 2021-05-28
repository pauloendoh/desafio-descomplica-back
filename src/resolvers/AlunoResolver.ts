import { Arg, Query, Resolver } from "type-graphql"
import { Aluno } from "../classes/Aluno"
import { alunos } from "../utils/alunos"

@Resolver()
export class AlunoResolver {
  @Query(() => [Aluno])
  getAlunos(
    @Arg("nome", { nullable: true }) nome: string,
    @Arg("cpf", { nullable: true }) cpf: string,
    @Arg("email", { nullable: true }) email: string
  ) {
    let filtered = [...alunos]

    if (nome?.length) {
      filtered = filtered.filter((aluno) =>
        aluno.nome.toUpperCase().includes(nome.toUpperCase())
      )
    }

    if (cpf?.length) {
      filtered = filtered.filter((aluno) =>
        aluno.cpf.toUpperCase().includes(cpf.toUpperCase())
      )
    }

    if (email?.length) {
      filtered = filtered.filter((aluno) =>
        aluno.email.toUpperCase().includes(email.toUpperCase())
      )
    }

    return filtered
  }
}
