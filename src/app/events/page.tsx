'use client';

import MainHeader from '../../components/layouts/mainHeader';
import SideNavbar from '../../components/events/SideNavbar';
import EventCard from '../../components/events/EventCard';
import AboutCard from '../../components/layouts/aboutCard';
import RelatedEventsCard from '../../components/events/RelatedEventsCard';
import EventLocationCard from '../../components/events/EventLocationCard';

export default function MainLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <div className="container">
          <div className="row g-4">
            <SideNavbar
              avatarUrl="/assets/images/avatar/07.jpg"
              backgroundUrl="/assets/images/bg/01.jpg"
              name="Sam Lanson"
              profession="Web Developer at Webestica"
              bio="I'd love to change the world, but they won’t give me the source code."
            />
            <div className="col-md-8 col-lg-9 vstack gap-4">
              <EventCard />
              <AboutCard />
              <div className="row g-4">
                <RelatedEventsCard />
                <EventLocationCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
