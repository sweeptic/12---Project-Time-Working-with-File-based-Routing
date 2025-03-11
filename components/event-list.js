import EventItem from './event-item';

export default function EventList(props) {
  const eventList = props.featuredEvents.map((event) => <EventItem event={event} />);

  return <ul>{eventList}</ul>;
}
