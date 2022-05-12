export function RepositoryItem(props) {
  return (
    <li>
      {/* usado dar um valor padrão */}
      <strong>{props.repository.name ?? "default"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>acessar o repositorio</a>
    </li>
  );
}
