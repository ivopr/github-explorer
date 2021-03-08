import { RepositoryItem } from './RepositoryItem'


const repo = {
  name: "unform",
  description: "forms in react",
  url: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
        <RepositoryItem repository={repo} />
      </ul>
    </section>
  )
}