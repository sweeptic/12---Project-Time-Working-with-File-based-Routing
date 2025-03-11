import Link from 'next/link';
import classes from './button.module.css';

export default function Button(props) {
  return (
    <Link className={classes.btn} href={props.link}>
      {/* <a className={classes.btn}>{props.children}</a> */}
      {props.children}
    </Link>
  );
}
