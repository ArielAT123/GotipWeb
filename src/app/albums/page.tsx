'use client';

import { useState } from 'react';
import MainHeader from '@/components/layouts/mainHeader';
import Sidebar from '@/components/albums/Sidebar';
import TabsSelector from '@/components/albums/TabSelector';
import PhotosOfYou from '@/components/albums/tabcomponents/FotosDeTi';
import YourPhotos from '@/components/albums/tabcomponents/TusFotos';
import RecentlyAdded from '@/components/albums/tabcomponents/RecienAgregados';
import Family from '@/components/albums/tabcomponents/Familia';
import Albums from '@/components/albums/tabcomponents/Albumes';
import CreateAlbumModal from '@/components/albums/CreateAlbumModal';
export default function AlbumsPage() {
  const [activeTab, setActiveTab] = useState('photos-of-you');

  const tabs = [
    { id: 'photos-of-you', label: 'Photos of you' },
    { id: 'your-photos', label: 'Your photos' },
    { id: 'recently-added', label: 'Recently added' },
    { id: 'family', label: 'Family' },
    { id: 'albums', label: 'Albums' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'photos-of-you':
        return <PhotosOfYou />;
      case 'your-photos':
        return <YourPhotos />;
      case 'recently-added':
        return <RecentlyAdded />;
      case 'family':
        return <Family />;
      case 'albums':
        return <Albums />;
      default:
        return null;
    }
  };

  return (
    <>
      <MainHeader />
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <Sidebar />
          </aside>

          {/* Main */}
          <section className="flex-1">
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h1 className="text-xl font-semibold text-gray-800">📷 My Albums</h1>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded transition"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCreateAlbum"
                >
                  <i className="fas fa-plus mr-2" />
                  Create album
                </button>
              </div>

              {/* Tabs */}
              <nav className="flex gap-4 overflow-x-auto text-sm font-medium border-b pb-2 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 ${
                      activeTab === tab.id
                        ? 'border-b-2 border-yellow-400 text-yellow-500 font-semibold'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>

              {/* Content */}
              {renderTabContent()}
            </div>
          </section>
        </div>
      </main>

      {/* Modal */}
      <CreateAlbumModal />
    </>
  );
}
