import Link from 'next/link';
import classes from './event-item.module.css';
import Button from './ui/button';
import DateIcon from './icons/date-icon';
import AddressIcon from './icons/address-icon';
import ArrowRightIcon from './icons/arrow-right-icon';

export default function EventItem({ event }) {
  const { id, image, title, description, date, location } = event;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/{$id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2> {title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time dateTime="">{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

//   {
//     id: 'e1',
//     title: 'Programming for everyone',
//     description:
//       'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
//     location: 'Some street 25, 12345 San Some where',
//     date: '2021-05-12',
//     image: 'images/coding-event.jpg',
//     isFeatured: false,
//   },
