// components/blogDetails/BlogComments.tsx
export default function BlogComments() {
    return (
      <>
        <h4>5 comments</h4>
  
        {/* Comment 1 */}
        <div className="my-4 d-flex">
          <img className="avatar avatar-md rounded-circle me-3" src="/images/avatar/04.jpg" alt="avatar" />
          <div>
            <div className="mb-2 d-sm-flex">
              <h6 className="m-0 me-2">Allen Smith</h6>
              <span className="me-3 small">June 11, 2022 at 6:01 am</span>
            </div>
            <p>Satisfied conveying a dependent contented...</p>
            <button className="btn btn-light btn-sm">Reply</button>
          </div>
        </div>
  
        {/* Reply */}
        <div className="my-4 d-flex ps-3 ps-md-5">
          <img className="avatar avatar-md rounded-circle me-3" src="/images/avatar/04.jpg" alt="avatar" />
          <div>
            <div className="mb-2 d-sm-flex">
              <h6 className="m-0 me-2">Allen Smith</h6>
              <span className="me-3 small">June 11, 2022 at 7:10 am</span>
            </div>
            <p>Meant balls it if up doubt small purse.</p>
            <button className="btn btn-light btn-sm">Reply</button>
          </div>
        </div>
  
        {/* Comment 2 */}
        <div className="mt-4 d-flex ps-2 ps-md-3">
          <img className="avatar avatar-md rounded-circle me-3" src="/images/avatar/03.jpg" alt="avatar" />
          <div>
            <div className="mb-2 d-sm-flex">
              <h6 className="m-0 me-2">Frances Guerrero</h6>
              <span className="me-3 small">June 14, 2022 at 12:35 pm</span>
            </div>
            <p>Required his you put the outlived answered...</p>
            <button className="btn btn-light btn-sm">Reply</button>
          </div>
        </div>
      </>
    );
  }
  