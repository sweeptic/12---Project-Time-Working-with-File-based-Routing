import EventItem from './event-item';

export default function EventList(props) {
  //  id: 'e1',
  //  title: 'Programming for everyone',
  //  description:
  //       'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
  //  location: 'Some street 25, 12345 San Some where',
  //  date: '2021-05-12',
  //  image: 'images/coding-event.jpg',
  //  isFeatured: false,

  const eventsList = props.featuredEvents.map((event) => <EventItem event={event} />);

  return <ul>{eventsList}</ul>;
}
