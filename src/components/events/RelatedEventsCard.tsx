'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function RelatedEventsCard() {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header border-0">
          <h5 className="card-title">Related events</h5>
        </div>
        <div className="card-body pt-0">
          <div className="d-sm-flex flex-wrap align-items-center mb-3">
            <div className="avatar avatar-md">
              <img className="avatar-img rounded-circle border border-white border-3" src="/assets/images/logo/01.svg" alt="" />
            </div>
            <div className="ms-sm-2 my-2 my-sm-0">
              <h6 className="mb-0">Bone thugs-n-harmony</h6>
              <p className="small mb-0"><i className="bi bi-geo-alt pe-1"></i>San francisco</p>
            </div>
            <div className="ms-sm-auto mt-2 mt-sm-0">
              <input type="checkbox" className="btn-check" id="Interested1" />
              <label className="btn btn-sm btn-outline-success" htmlFor="Interested1"><FontAwesomeIcon icon={faThumbsUp} className="me-1" /> Interested</label>
            </div>
          </div>
          {/* Otros eventos relacionados omitidos por brevedad */}
        </div>
      </div>
    </div>
  );
}