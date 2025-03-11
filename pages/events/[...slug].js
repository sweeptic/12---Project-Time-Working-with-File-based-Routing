import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/event-list';
import ResultsTitle from '../../components/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const yearNum = +filterData[0];
  const monthNum = +filterData[1];

  if (isNaN(yearNum) || isNaN(monthNum) || yearNum > 2030 || yearNum < 2021 || monthNum < 1 || monthNum > 12) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter.</p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({ year: yearNum, month: monthNum });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </ErrorAlert>
      </>
    );
  }

  const date = new Date(yearNum, monthNum - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList featuredEvents={filteredEvents} />
    </>
  );
}
