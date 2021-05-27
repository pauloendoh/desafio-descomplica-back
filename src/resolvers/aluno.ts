import { Arg, Query, Resolver } from "type-graphql"
import { Aluno } from "../classes/Aluno"
import { alunos } from "../utils/alunos"

@Resolver()
export class AlunoResolver {
  @Query(() => [Aluno])
  getAllAlunos() {
    return alunos
  }

  @Query(() => [Aluno])
  getAlunosByNome(@Arg("nome") nome: string) {
    return alunos.filter((aluno) =>
      aluno.nome.toUpperCase().includes(nome.toUpperCase())
    )
  }

  @Query(() => [Aluno])
  getAlunosByCpf(@Arg("cpf") cpf: string) {
    return alunos.filter((aluno) =>
      aluno.cpf.toUpperCase().includes(cpf.toUpperCase())
    )
  }

  @Query(() => [Aluno])
  getAlunosByEmail(@Arg("email") email: string) {
    return alunos.filter((aluno) =>
      aluno.email.toUpperCase().includes(email.toUpperCase())
    )
  }
}
