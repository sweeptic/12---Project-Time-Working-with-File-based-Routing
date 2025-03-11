import EventList from '../../components/event-list';
import { getAllEvents } from '../../dummy-data';

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList featuredEvents={events} />
    </div>
  );
}
