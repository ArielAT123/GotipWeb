'use client';

type SideNavbarProps = {
  avatarUrl: string;
  backgroundUrl: string;
  name: string;
  profession: string;
  bio: string;
};

export default function SideNavbar({
  avatarUrl,
  backgroundUrl,
  name,
  profession,
  bio
}: SideNavbarProps) {
  return (
    <div className="col-lg-3">
      <div className="d-flex align-items-center d-lg-none mb-3">
        <button
          className="border-0 bg-transparent"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSideNavbar"
          aria-controls="offcanvasSideNavbar"
        >
          <i className="btn btn-primary fw-bold fa-solid fa-sliders-h"></i>
          <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
        </button>
      </div>

      <nav className="navbar navbar-expand-lg mx-0">
        <div
          className="offcanvas offcanvas-start show"
          tabIndex={-1}
          id="offcanvasSideNavbar"
        >
          <div className="offcanvas-header d-lg-none">
            <button
              type="button"
              className="btn-close text-reset ms-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body d-block px-2 px-lg-0">
            {/* Perfil dinámico */}
            <div className="card overflow-hidden shadow-sm border rounded-3">
              <div
                className="text-white text-center py-4"
                style={{
                  backgroundImage: `url(${backgroundUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    className="rounded-circle border border-white border-3 shadow-sm"
                    src={avatarUrl}
                    alt="avatar"
                    style={{
                      width: '90px',
                      height: '90px',
                      objectFit: 'cover',
                      marginTop: '1rem'
                    }}
                  />
                  <h5 className="mb-0 mt-2 fw-bold text-black">{name}</h5>
                  <small className="text-black-50">{profession}</small>
                </div>
              </div>

              <div className="card-body text-center">
                <p className="mt-2 small text-muted fst-italic">{bio}</p>

                <div className="d-flex justify-content-center gap-4 mt-3">
                  <div>
                    <h6 className="mb-0 fw-bold">256</h6>
                    <small className="text-muted">Post</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0 fw-bold">2.5K</h6>
                    <small className="text-muted">Followers</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0 fw-bold">365</h6>
                    <small className="text-muted">Following</small>
                  </div>
                </div>

                <hr className="my-3" />

                <ul className="nav nav-pills flex-column text-start gap-2">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/feed">
                      <i className="fa-solid fa-house me-2 text-primary"></i> Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/connections">
                      <i className="fa-solid fa-user-group me-2 text-primary"></i> Connections
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/news">
                      <i className="fa-solid fa-globe me-2 text-primary"></i> Latest News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/events">
                      <i className="fa-solid fa-calendar me-2 text-primary"></i> Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/groups">
                      <i className="fa-solid fa-users me-2 text-primary"></i> Groups
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/notifications">
                      <i className="fa-solid fa-bell me-2 text-primary"></i> Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="/settings">
                      <i className="fa-solid fa-gear me-2 text-primary"></i> Settings
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-footer text-center py-2 bg-light">
                <a className="btn btn-outline-primary btn-sm" href="/profile">
                  View Profile
                </a>
              </div>
            </div>

            <ul className="nav small mt-4 justify-content-center lh-1">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/privacy">Privacy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/terms">Terms</a>
              </li>
            </ul>

            <p className="small text-center mt-2 mb-0 text-muted">
              ©2025 <a className="text-muted" target="_blank" href="https://www.webestica.com/">Webestica</a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
