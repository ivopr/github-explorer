import { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'

import "../styles/repositories.scss"

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([] as Repository[])

  useEffect(() => {
    fetch("https://api.github.com/users/demotional/repos")
      .then(response => response.json())
      .then((data: Repository[]) => setRepositories(data))
  }, [])

  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repo => <RepositoryItem key={repo.name} repository={repo} />)}
      </ul>
    </section>
  )
}