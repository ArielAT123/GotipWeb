"use client";

import MainHeader from "../../components/layouts/mainHeader";
import SideNavbar from "../../components/events/SideNavbar";
import AboutCard from "../../components/layouts/aboutCard";
import RelatedEventsCard from "../../components/events/RelatedEventsCard";
import EventLocationCard from "../../components/events/EventLocationCard";
import EventCreateButton from "../../components/events/CreateEventBoton";
import DiscoverEventsPage from "@/components/events/DiscordEventPage";

export default function EventsPage() {
  return (
    <>
      <main className="pt-4"> {/* Espaciado superior para separar del header */}
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
              {/* Header + Create button */}
              <div className="card h-100">
                <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
                  <DiscoverEventsPage />
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Aquí iría el contenido de eventos filtrados por tabs.
                  </p>
                </div>
              </div>

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
