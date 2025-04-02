import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg mx-0">
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSideNavbar">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-block px-2 px-lg-0">
          <div className="card overflow-hidden">
            <div className="h-50px" style={{
              backgroundImage: 'url(/assets/images/bg/01.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}></div>
            
            <div className="card-body pt-0">
              <div className="text-center">
                <div className="avatar avatar-lg mt-n5 mb-3">
                  <Link href="#!">
                    <img className="avatar-img rounded border border-white border-3" src="/assets/images/avatar/07.jpg" alt="" />
                  </Link>
                </div>
                
                <h5 className="mb-0"><Link href="#!">Sam Lanson</Link></h5>
                <small>Web Developer at Webestica</small>
                <p className="mt-3">I'd love to change the world, but they won't give me the source code.</p>

                <div className="hstack gap-2 gap-xl-3 justify-content-center">
                  <div>
                    <h6 className="mb-0">256</h6>
                    <small>Post</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0">2.5K</h6>
                    <small>Followers</small>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6 className="mb-0">365</h6>
                    <small>Following</small>
                  </div>
                </div>
              </div>

              <hr />

              <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                <li className="nav-item">
                  <Link className="nav-link" href="/my-profile">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/home-outline-filled.svg" alt="" />
                    <span>Feed</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/my-profile-connections">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/person-outline-filled.svg" alt="" />
                    <span>Connections</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/earth-outline-filled.svg" alt="" />
                    <span>Latest News</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/events">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/calendar-outline-filled.svg" alt="" />
                    <span>Events</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/groups">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/chat-outline-filled.svg" alt="" />
                    <span>Groups</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/notifications">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/notification-outlined-filled.svg" alt="" />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/settings">
                    <img className="me-2 h-20px fa-fw" src="/assets/images/icon/cog-outline-filled.svg" alt="" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="card-footer text-center py-2">
              <Link className="btn btn-link btn-sm" href="/my-profile">View Profile</Link>
            </div>
          </div>

          <ul className="nav small mt-4 justify-content-center lh-1">
            <li className="nav-item">
              <Link className="nav-link" href="/my-profile-about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/settings">Settings</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://support.webestica.com/login">Support</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="/docs/index.html">Docs</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/help">Help</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/privacy-and-terms">Privacy & terms</Link>
            </li>
          </ul>
          
          <p className="small text-center mt-1">©2022 <a className="text-body" target="_blank" href="https://www.webestica.com/">Webestica</a></p>
        </div>
      </div>
    </nav>
  );
}