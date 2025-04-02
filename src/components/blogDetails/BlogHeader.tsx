// components/blogDetails/BlogHeader.tsx
export default function BlogHeader() {
    return (
      <>
        <img className="rounded w-full" src="/images/post/16by9/big/03.jpg" alt="Blog" />
        <div className="mt-4">
          <span className="badge bg-danger bg-opacity-10 text-danger mb-2 fw-bold">Lifestyle</span>
          <h1 className="mb-2 h2">New comment moderation and support features, including live chat.</h1>
          <ul className="nav nav-stack gap-3 align-items-center">
            <li className="nav-item">
              <span className="nav-link">by <a className="text-reset btn-link">Louis Ferguson</a></span>
            </li>
            <li className="nav-item"><i className="bi bi-calendar-date pe-1"></i> Nov 15, 2022</li>
            <li className="nav-item"><i className="bi bi-clock pe-1"></i> 5 min read</li>
          </ul>
        </div>
      </>
    );
  }
  