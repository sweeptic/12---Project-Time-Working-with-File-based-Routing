import MainHeader from './main-header';

export default function Layout(props) {
  console.log('props', props);
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
