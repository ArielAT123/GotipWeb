'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faThumbsUp, faGlobe, faUserPlus, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export default function AboutCard() {
  return (
    <div className="card card-body">
      <div className="row g-4">
        <div className="col-12">
          <p className="mb-0">
            He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place voice no arises along to. Parlors waiting so against me no.
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h5>Timings</h5>
          <p className="small mb-0">09:00 AM - 05:00 PM (Business)</p>
          <p className="small mb-0">09:00 AM - 03:00 PM (Business)</p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h5>Entry fees</h5>
          <p className="small mb-0">
            <a href="#!">Free Ticket</a> For photography professionals check official website
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h5>Category & type</h5>
          <p className="small mb-0">Trade Show</p>
          <p className="small mb-0">Photography & Prewedding</p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <h5>Estimated turnout</h5>
          <p className="small mb-0">140000 Visitors</p>
          <p className="small mb-0">1800 Exhibitors</p>
          <span className="badge bg-danger text-danger bg-opacity-10 small">Estimated Count</span>
        </div>
        <div className="col-sm-6 col-lg-4">
          <ul className="d-flex list-unstyled mb-1">
            <li className="me-2">4.5</li>
            <li><FontAwesomeIcon icon={faStar} className="text-warning" /></li>
            <li><FontAwesomeIcon icon={faStar} className="text-warning" /></li>
            <li><FontAwesomeIcon icon={faStar} className="text-warning" /></li>
            <li><FontAwesomeIcon icon={faStar} className="text-warning" /></li>
            <li><FontAwesomeIcon icon={faStarHalfStroke} className="text-warning" /></li>
            <li className="ms-1 small">132 Ratings</li>
          </ul>
          <p className="mb-0 small">
            <strong>#2 of 3506</strong> Events in Photography & Prewedding
          </p>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="d-flex">
            <h6>
              <FontAwesomeIcon icon={faThumbsUp} className="text-success me-1" /> 50
            </h6>
            <p className="small ms-2">People have shown interest recently</p>
          </div>
          <button className="btn btn-success-soft btn-sm">Interested?</button>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h5>Attendees</h5>
          <ul className="avatar-group list-unstyled align-items-center">
            <li className="avatar avatar-xs">
              <img className="avatar-img rounded-circle" src="/assets/images/avatar/01.jpg" alt="avatar" />
            </li>
            <li className="avatar avatar-xs">
              <img className="avatar-img rounded-circle" src="/assets/images/avatar/03.jpg" alt="avatar" />
            </li>
            <li className="avatar avatar-xs">
              <img className="avatar-img rounded-circle" src="/assets/images/avatar/04.jpg" alt="avatar" />
            </li>
            <li className="avatar avatar-xs">
              <img className="avatar-img rounded-circle" src="/assets/images/avatar/05.jpg" alt="avatar" />
            </li>
            <li className="avatar avatar-xs">
              <img className="avatar-img rounded-circle" src="/assets/images/avatar/06.jpg" alt="avatar" />
            </li>
            <li className="ms-4">
              <small>148.9K people responded</small>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="row g-2">
            <div className="col-sm-4">
              <div className="d-flex">
                <FontAwesomeIcon icon={faGlobe} className="fs-4" />
                <div className="ms-3">
                  <h5 className="mb-0">125</h5>
                  <p className="mb-0">Visitors</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex">
                <FontAwesomeIcon icon={faUserPlus} className="fs-4" />
                <div className="ms-3">
                  <h5 className="mb-0">356</h5>
                  <p className="mb-0">Registred</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="d-flex">
                <FontAwesomeIcon icon={faPeopleGroup} className="fs-4" />
                <div className="ms-3">
                  <h5 className="mb-0">350</h5>
                  <p className="mb-0">Attendance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}