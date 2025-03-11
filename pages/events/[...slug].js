import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/event-list';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  console.log('filterData', filterData);

  const yearNum = +filterData[0];
  const monthNum = +filterData[1];

  if (isNaN(yearNum) || isNaN(monthNum) || yearNum > 2030 || yearNum < 2021 || monthNum < 1 || monthNum > 12) {
    return <p>Invalid filter.</p>;
  }

  const filteredEvents = getFilteredEvents({ year: yearNum, month: monthNum });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return <div>{<EventList featuredEvents={filteredEvents} />}</div>;
}
