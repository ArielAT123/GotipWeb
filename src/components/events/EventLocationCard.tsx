'use client';

export default function EventLocationCard() {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h5 className="card-title mb-0">Event location</h5>
          <p className="small"><i className="bi bi-geo-alt pe-1"></i>750 Sing Sing Rd, Horseheads, NY, 14845</p>
        </div>
        <div className="card-body pt-0">
          <iframe
            className="w-100 d-block rounded-bottom grayscale"
            height="230"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
}