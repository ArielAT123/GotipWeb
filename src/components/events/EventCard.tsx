'use client';

export default function EventCard() {
  return (
    <div className="card card-body card-overlay-bottom border-0" style={{ backgroundImage: "url(/assets/images/events/06.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="row g-3 justify-content-between">
        <div className="col-lg-2">
          <div className="bg-mode text-center rounded overflow-hidden p-1 d-inline-block">
            <div className="bg-primary p-2 text-white rounded-top small lh-1">Wednesday</div>
            <h5 className="mb-0 py-2 lh-1">Dec 08</h5>
          </div>
        </div>
      </div>
      <div className="bg-black row g-3 justify-content-between align-items-center mt-5 pt-5 position-relative z-index-9 rounded">
        <div className="col-lg-9">
          <h1 className="h3 mb-1 text-white ">The learning conference</h1>
          <a className="text-white" href="https://themes.getbootstrap.com/store/webestica" target="_blank">https://themes.getbootstrap.com/store/webestica</a>
        </div>
        <div className="col-lg-3 text-lg-end">
          <a className="btn btn-primary" href="#!">Buy ticket</a>
        </div>
      </div>
    </div>
  );
}