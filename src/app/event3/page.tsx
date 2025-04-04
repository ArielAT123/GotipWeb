import EventHeroFilter from "@/components/events/EventFilter";
import MainHeader from "@/components/layouts/mainHeader";
import DiscordEventPage from "@/components/events/DiscordEventPage";

export default function EventsPage() {
  return (
    <>
      <main>
        <EventHeroFilter />

        <section className="container mx-auto px-4 py-6">
          <DiscordEventPage />
        </section>
      </main>
    </>
  );
}
