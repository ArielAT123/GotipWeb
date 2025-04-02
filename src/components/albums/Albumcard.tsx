import { Album } from '../../types/album';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <>
      <a href="#">
        <img className="rounded img-fluid" src={album.src} alt={album.title} />
      </a>
      
      <div className="hstack mt-3">
        <div>
          <h6 className="mb-0"><a href="#!">{album.title}</a></h6>
          <a className="text-secondary small" href="#!">{album.count} Items</a>
        </div>
        
        <div className="dropdown ms-auto">
          <button 
            className="icon-sm bg-light text-secondary rounded-circle" 
            id={`albumActionSetting${album.id}`} 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <i className="bi bi-three-dots"></i>
          </button>
          
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`albumActionSetting${album.id}`}>
            <li><button className="dropdown-item"><i className="bi bi-pencil fa-fw pe-1"></i> Edit</button></li>
            <li><button className="dropdown-item"><i className="bi bi-download fa-fw pe-1"></i> Download</button></li>
            <li><button className="dropdown-item"><i className="bi bi-trash fa-fw pe-1"></i> Delete</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item"><i className="bi bi-flag fa-fw pe-1"></i> Report album</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}