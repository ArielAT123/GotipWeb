'use client';

import { useState } from 'react';
import DiscoverTabs from './DiscoverTabs';
import EventCard from './LiveEventCard';
import EventCreateButton from "../../components/events/CreateEventBoton";


export type TabKey = 'Top' | 'Local' | 'This week' | 'Online' | 'Friends' | 'Following';

export default function DiscoverEventsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('Top');

  const allEvents: Record<TabKey, number[]> = {
    Top: [1, 2, 3],
    Local: [4],
    'This week': [5, 6],
    Online: [7, 8],
    Friends: [],
    Following: [9],
  };

  const currentEvents = allEvents[activeTab];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Discover Events</h3>
            <EventCreateButton />
      </div>

      <DiscoverTabs onTabChange={(tab: TabKey) => setActiveTab(tab)} />

      <div className="row g-4">
        {currentEvents.length > 0 ? (
          currentEvents.map((eventId) => (
            <div key={eventId} className="col-md-6 col-lg-4">
              <EventCard />
            </div>
          ))
        ) : (
          <p>
            No events found for <strong>{activeTab}</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
