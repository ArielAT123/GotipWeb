export default function TagList() {
    const tags = ['blog', 'business', 'theme', 'social', 'getbootstrap', 'design', 'news', 'magazine', 'events'];
  
    return (
      <div className="card">
        <div className="card-header pb-0 border-0">
          <h5 className="card-title mb-0">Tags</h5>
        </div>
        <div className="card-body">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <li key={idx}>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-orange-500 hover:text-white">
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  