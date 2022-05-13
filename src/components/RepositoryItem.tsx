export function RepositoryItem(props) {
  return (
    <li>
      {/* usado dar um valor padrão */}
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>acessar o repositorio</a>
    </li>
  );
}
