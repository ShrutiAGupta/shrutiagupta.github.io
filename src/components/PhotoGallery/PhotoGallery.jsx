import React, { useState } from 'react';
import { photos } from '../../data/galleryPhotos';
import './PhotoGallery.scss'

const PhotoGallery = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const allTags = ['all', ...new Set(photos.flatMap(photo => photo.tags))];

  const displayTag = (tag) => {
    // Special case for 'all'
    if (tag === 'all') return 'All';
    return tag.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const filteredPhotos = selectedTag === 'all' 
    ? photos 
    : photos.filter(photo => photo.tags.includes(selectedTag));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-md ${
              selectedTag === tag 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {displayTag(tag)}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <img
              src={photo.src}
              alt={photo.src}
              className="w-full hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
            />
          </div>
        ))}
      </div>
    
    {/* Modal */}
    {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute cross-icon text-white hover:text-gray-300 text-2xl font-bold w-8 h-8"
            onClick={() => setSelectedImage(null)}
          >
           <i class='bx bx-x'></i>
          </button>
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      </div>
  );
};

export default PhotoGallery;