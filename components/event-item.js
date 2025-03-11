export default function EventItem(props) {
  const { id, title, description } = props.event;

  return (
    <li key={id}>
      <h1> {title}</h1>
      <p>{description}</p>
    </li>
  );
}
