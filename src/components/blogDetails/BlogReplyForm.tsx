// components/blogDetails/BlogReplyForm.tsx
export default function BlogReplyForm() {
    return (
      <div className="mt-5">
        <h4>Leave a reply</h4>
        <form className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Name *</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email *</label>
            <input type="email" className="form-control" />
          </div>
          <div className="col-12">
            <label className="form-label">Your Comment *</label>
            <textarea className="form-control" rows={3}></textarea>
          </div>
          <div className="col-md-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="remember" />
              <label className="form-check-label" htmlFor="remember">
                Save my name and email in this browser for the next time I comment.
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Post comment</button>
          </div>
        </form>
      </div>
    );
}  