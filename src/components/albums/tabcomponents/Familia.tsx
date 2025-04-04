'use client';

export default function TabFamily() {
  return (
    <div className="text-center py-16 bg-gray-50 rounded-lg shadow-inner">
      <i className="fas fa-photo-video text-4xl text-gray-400 mb-4" />
      <h4 className="text-lg font-semibold text-gray-700 mb-2">No photos or videos</h4>
      <button
        className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition"
      >
        Add to Family Album
      </button>
    </div>
  );
}
