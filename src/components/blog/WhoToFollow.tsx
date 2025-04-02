export default function WhoToFollow() {
    const people = [
      { name: 'Billy Vasquez', role: 'News anchor', avatar: '/avatar1.jpg' },
      { name: 'Lori Ferguson', role: 'Web Developer at Webestica', avatar: '/avatar2.jpg' },
      { name: 'Carolyn Ortiz', role: 'News anchor', avatar: '/avatar3.jpg' },
    ];
  
    return (
      <div className="card">
        <div className="card-header pb-0 border-0">
          <h5 className="card-title mb-0">Who to follow</h5>
        </div>
        <div className="card-body">
          {people.map((person, idx) => (
            <div key={idx} className="flex items-center gap-3 mb-3">
              <img src={person.avatar} alt={person.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 truncate m-0">{person.name}</p>
                <p className="text-xs text-gray-500 truncate m-0">{person.role}</p>
              </div>
              <button className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }