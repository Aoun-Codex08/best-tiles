import { Helmet } from 'react-helmet-async';
import HomeView from 'src/sections/home/view/home-view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> SellStore </title>
      </Helmet>

      <HomeView />
    </>
  );
}
