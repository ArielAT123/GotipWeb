'use client';

import React from 'react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { key: 'photosOfYou', label: 'Photos of you' },
  { key: 'yourPhotos', label: 'Your photos' },
  { key: 'recentlyAdded', label: 'Recently added' },
  { key: 'family', label: 'Family' },
  { key: 'albums', label: 'Albums' },
];

export default function TabsSelector({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-3 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`text-sm font-medium pb-2 border-b-2 transition-all ${
            activeTab === tab.key
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-blue-600'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
