import EventItem from './event-item';
import classes from './event-list.module.css';

export default function EventList({ featuredEvents }) {
  const eventList = featuredEvents.map((event) => <EventItem key={event.id} event={event} />);

  return <ul className={classes.list}>{eventList}</ul>;
}
