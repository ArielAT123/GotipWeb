"use client";
import styles from "./EventModal.module.css";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function EventModal({ onClose }: Props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
    guestEmail: "",
    attachment: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, attachment: file }));
  };

  const handleSubmit = () => {
    console.log("Event Created:", formData);
    onClose();
  };

  return (
    <div className={styles["modal-backdrop"]}>
        <div className="modal show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">Create event</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows={2}
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-sm-4">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-4">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-4">
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 1hr 23m"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Add guest</label>
                  <input
                    type="email"
                    className="form-control"
                    name="guestEmail"
                    value={formData.guestEmail}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Upload attachment</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button className="btn btn-danger-soft" onClick={onClose}>Cancel</button>
              <button className="btn btn-success-soft" onClick={handleSubmit}>Create now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
