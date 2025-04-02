import styles from './page.module.css';
import Sidebar from '../../components/albums/Sidebar';
import PhotoCard from '../../components/albums/PhotoCard';
import AlbumCard from '../../components/albums/Albumcard';

export default function AlbumsPage() {
  const photos = [
    { id: 1, src: '/images/albums/01.jpg', alt: 'Photo 1' },
    { id: 2, src: '/images/albums/02.jpg', alt: 'Photo 2' },
    { id: 3, src: '/images/albums/03.jpg', alt: 'Photo 3' },
    { id: 4, src: '/images/albums/04.jpg', alt: 'Photo 4' },
    { id: 5, src: '/images/albums/05.jpg', alt: 'Photo 5' },
    { id: 6, src: '/images/albums/06.jpg', alt: 'Photo 6' },
  ];

  const albums = [
    { id: 1, title: 'Cover Photos', count: 5, src: '/images/albums/01.jpg' },
    { id: 2, title: 'Profile pictures', count: 20, src: '/images/albums/02.jpg' },
    { id: 3, title: 'Untitled pictures', count: 12, src: '/images/albums/03.jpg' },
  ];

  return (
    <div className="container">
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="col-md-8 col-lg-6 vstack gap-4">
          <div className="card">
            <div className="card-header d-sm-flex text-center align-items-center justify-content-between border-0 pb-0">
              <h1 className="card-title h4">Photos</h1>
              <button 
                className="btn btn-primary-soft" 
                data-bs-toggle="modal" 
                data-bs-target="#modalCreateAlbum"
              >
                <i className="fa-solid fa-plus pe-1"></i> Create album
              </button>
            </div>

            <div className="card-body">
              {/* Tabs */}
              <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#tab-1">
                    Photos of you
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Your photos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Recently added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Family
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Albums
                  </a>
                </li>
              </ul>

              {/* Tab content */}
              <div className="tab-content mb-0 pb-0">
                {/* Photos of you */}
                <div className="tab-pane fade show active" id="tab-1">
                  <div className="row g-3">
                    {/* Add photo card */}
                    <div className="col-6 col-lg-3">
                      <div className={`border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative ${styles.addPhotoCard}`}>
                        <a className="stretched-link" href="#">
                          <i className="fa-solid fa-camera-retro fs-1"></i>
                          <h6 className="mt-2">Add photo</h6>
                        </a>
                      </div>
                    </div>
                    
                    {/* Photo cards */}
                    {photos.map(photo => (
                      <div key={photo.id} className="col-6 col-lg-3 position-relative">
                        <PhotoCard photo={photo} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Your photos */}
                <div className="tab-pane fade" id="tab-2">
                  <div className="row g-3">
                    {/* Add photo card */}
                    <div className="col-6 col-lg-3">
                      <div className={`border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative ${styles.addPhotoCard}`}>
                        <a className="stretched-link" href="#">
                          <i className="fa-solid fa-camera-retro fs-1"></i>
                          <h6 className="mt-2">Add photo</h6>
                        </a>
                      </div>
                    </div>
                    
                    {/* Photo cards */}
                    {photos.slice(0, 3).map(photo => (
                      <div key={photo.id} className="col-6 col-lg-3 position-relative">
                        <PhotoCard photo={photo} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recently added */}
                <div className="tab-pane fade" id="tab-3">
                  <div className="row g-3">
                    {/* Add photo card */}
                    <div className="col-6 col-lg-3">
                      <div className={`border border-2 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative ${styles.addPhotoCard}`}>
                        <a className="stretched-link" href="#">
                          <i className="fa-solid fa-camera-retro fs-1"></i>
                          <h6 className="mt-2">Add photo</h6>
                        </a>
                      </div>
                    </div>
                    
                    {/* Photo cards */}
                    {photos.slice(0, 3).map(photo => (
                      <div key={photo.id} className="col-6 col-lg-3 position-relative">
                        <PhotoCard photo={photo} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Family */}
                <div className="tab-pane fade text-center" id="tab-4">
                  <div className="my-sm-5 py-sm-5">
                    <i className="display-1 text-muted bi bi-file-earmark-x"></i>
                    <h4 className="mt-2 mb-3 text-body">No photos or videos</h4>
                    <button 
                      className="btn btn-primary-soft btn-sm" 
                      data-bs-toggle="modal" 
                      data-bs-target="#modalCreateAlbum"
                    >
                      Click here to add
                    </button>
                  </div>
                </div>

                {/* Albums */}
                <div className="tab-pane fade" id="tab-5">
                  <div className="row g-3">
                    {albums.map(album => (
                      <div key={album.id} className="col-6 col-lg-3">
                        <AlbumCard album={album} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Album Modal */}
      <div className="modal fade" id="modalCreateAlbum" tabIndex={-1} aria-labelledby="modalLabelCreateAlbum" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateAlbum">Create album</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Album name</label>
                  <input type="text" className="form-control" placeholder="Add album name here" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Select audience</label>
                  <select className="form-select js-choice rounded" data-remove-item-button="true" data-placeholder="false">
                    <option value="PB">Public</option>
                    <option value="FR">Friends</option>
                    <option value="SF">Specific friends</option>
                    <option value="OM">Only me</option>
                    <option value="CM">Custom</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Upload Photos or Videos</label>
                  <div className="dropzone dropzone-default card shadow-none" data-dropzone='{"maxFiles":2}'>
                    <div className="dz-message">
                      <i className="fa-solid fa-folder-open display-3"></i>
                      <p>Drop image here or click to upload.</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success-soft">Create now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}