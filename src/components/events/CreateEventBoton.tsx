    "use client";

    import { useState } from "react";
    import EventModal from "./EventModal";

    export default function EventCreateButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <button
  className="btn border rounded-pill shadow-sm px-3 py-2 d-flex align-items-center gap-2"
  style={{
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#f8f9fa', // color claro tipo 'soft'
    color: '#333',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
  onClick={() => setShowModal(true)}
>
  <i className="fa-solid fa-plus"></i> Create event
</button>

    );
    }
