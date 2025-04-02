import React from 'react';
import type { TabKey } from './DiscordEventPage'; // o desde 'types.ts' si lo separaste

type Props = {
  onTabChange: (tab: TabKey) => void;
};

const TABS: TabKey[] = ['Top', 'Local', 'This week', 'Online', 'Friends', 'Following'];

export default function DiscoverTabs({ onTabChange }: Props) {
  return (
    <div className="nav nav-tabs mb-3">
      {TABS.map((tab) => (
        <button
          key={tab}
          className="nav-link"
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
