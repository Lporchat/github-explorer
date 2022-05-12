import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform2",
  description: "react forms",
  link: "https://github.com/",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}