export default function RecentPostList() {
    const posts = [
      { title: 'Ten questions you should answer truthfully', time: '2hr' },
      { title: 'Five unbelievable facts about money', time: '3hr' },
      { title: 'Best Pinterest Boards for learning about business', time: '4hr' },
      { title: 'Skills that you can learn from business', time: '6hr' },
    ];
  
    return (
      <div className="card">
        <div className="card-header pb-0 border-0">
          <h5 className="card-title mb-0">Recent post</h5>
        </div>
        <div className="card-body">
          {posts.map((post, idx) => (
            <div key={idx} className="mb-3">
              <h6 className="mb-0"><a href="#" className="text-gray-800 hover:text-orange-500">{post.title}</a></h6>
              <small className="text-gray-500">{post.time}</small>
            </div>
          ))}
          <a href="#" className="btn btn-link text-sm text-gray-500 hover:text-orange-500">View all latest news</a>
        </div>
      </div>
    );
  }