import  { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Card() {
  const [attachments, setAttachments] = useState([]);
  const [isUploading, setIsUploading] = useState(false); // Add loading state
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Trigger file input click on paperclip icon click
  const handlePaperclipClick = () => {
    document.getElementById('fileUpload').click(); // Trigger file input click programmatically
  };

  // Handle file uploads and add them to the attachments list
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setIsUploading(true); // Set uploading state

      // Process files and extract names and extensions
      const newAttachments = Array.from(files).map(file => ({
        name: file.name.split('.').slice(0, -1).join('.'),
        extension: file.name.split('.').pop(),
      }));

      // Update the attachments state
      setAttachments(prev => [...prev, ...newAttachments]);
      setIsUploading(false); // Reset uploading state
      setShowModal(true); // Show the modal after files are uploaded
    }
  };

  return (
    <div className="card-container">
      <div className="row" style={{ padding: '0.2rem' }}>
        <div className="col-6 d-flex align-items-center">
          <img src="../../images/new.png" className="image" alt="Client Icon" />
          <p className="design ms-1">Client Name</p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <img src="../../images/new.png" className="image" alt="Client Icon" />
          <p className="design ms-1">Client Name</p>
        </div>
        <div className="col-6 d-flex align-items-center">
          <i className="fas fa-layer-group text"></i>
          <p className="text mb-0 ms-2">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <i className="fas fa-clipboard text"></i>
          <p className="text mb-0 ms-2">1/2</p>
        </div>

        <div className="d-flex flex-nowrap align-items-center mt-2">
          <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-start" style={{ marginRight: '-0.2rem' }}>
            <img src="../../images/new.png" className="image " alt="Attachment 1" />
          </div>

          <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-center" style={{ marginRight: '-0.2rem' }}>
            <img src="../../images/new.png" className="image " alt="Attachment 2" />
          </div>

          <div className="col-1 col-md-1 col-lg-1 d-flex align-items-center justify-content-center">
            <p className="text mb-0 border p-1" style={{ backgroundColor: '#ededed' }}>12+</p>
          </div>

          <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <i className="fas fa-comments text"></i>
            <p className="text mb-0 ms-1">15</p>
          </div>

          <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <i className="fas fa-paperclip text" onClick={handlePaperclipClick} style={{ cursor: 'pointer' }}></i>
            <p className="text mb-0 ms-1">{attachments.length}</p> {/* Displaying the number of attachments */}
          </div>

          <div className="col-3 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
            <i className="fas fa-calendar-alt text"></i>
            <p className="text mb-0 ms-1">25-12-2022</p>
          </div>
        </div>
      </div>

      {/* Hidden file input to upload files */}
      <input
        type="file"
        id="fileUpload"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Modal to show attachments */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal-content p-3">
            <h5>Uploaded Attachments</h5>
            <ul>
              {attachments.map((file, index) => (
                <li key={index}>
                  {file.name}.{file.extension}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isUploading && (
        <div className="loading">Uploading...</div>
      )}
    </div>
  );
}

export default Card;
