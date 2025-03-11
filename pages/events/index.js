import EventList from '../../components/event-list';
import EventSearch from '../../components/event-search';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventSearch />
      <EventList featuredEvents={events} />
    </div>
  );
}
