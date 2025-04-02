import { Photo } from '../../types/photos';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <>
      <div className="position-absolute bottom-0 end-0">
        <div className="dropdown mb-2 me-3">
          <button 
            className="icon-sm bg-primary text-white rounded-circle" 
            id={`photoActionEdit${photo.id}`} 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <i className="bi bi-pencil-fill"></i>
          </button>
          
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`photoActionEdit${photo.id}`}>
            <li><button className="dropdown-item"><i className="bi bi-tag fa-fw pe-1"></i> Remove Tag</button></li>
            <li><button className="dropdown-item"><i className="bi bi-download fa-fw pe-1"></i> Download</button></li>
            <li><button className="dropdown-item"><i className="bi bi-person fa-fw pe-1"></i> Make Profile Picture</button></li>
            <li><button className="dropdown-item"><i className="bi bi-person-bounding-box fa-fw pe-1"></i> Make Cover Photo</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item"><i className="bi bi-flag fa-fw pe-1"></i> Report photo</button></li>
          </ul>
        </div>
      </div>
      
      <a href={photo.src} data-gallery="image-popup" data-glightbox="description: .custom-desc2; descPosition: left;">
        <img className="rounded img-fluid" src={photo.src} alt={photo.alt} />
      </a>
      
      <div className="glightbox-desc custom-desc2">
        {/* Contenido del lightbox */}
      </div>
    </>
  );
}