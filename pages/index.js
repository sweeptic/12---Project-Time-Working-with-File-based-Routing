import EventList from '../components/event-list';
import Event from '../components/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Main page</h1>
      <div>
        <EventList featuredEvents={featuredEvents} />
      </div>
    </div>
  );
}
