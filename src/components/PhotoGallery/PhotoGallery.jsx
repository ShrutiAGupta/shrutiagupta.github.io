import React, { useState } from "react";
import { photos } from "../../data/galleryPhotos";
import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const allTags = ["all", ...new Set(photos.flatMap((photo) => photo.tags))];

  const displayTag = (tag) => {
    // Special case for 'all'
    if (tag === "all") return "All";
    return tag
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredPhotos =
    selectedTag === "all"
      ? photos
      : photos.filter((photo) => photo.tags.includes(selectedTag));

  const handlePhotoNavClick = ({ type }) => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.src === selectedImage.src
    );
    const nextIndex = type === "prev" ? currentIndex - 1 : currentIndex + 1;
    setSelectedImage(filteredPhotos[nextIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-md ${
              selectedTag === tag
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
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
              loading="lazy"
              className="w-full hover:opacity-90 transition-opacity cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed full-img-container inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute text-white hover:text-gray-300 font-bold top-[60px] right-0 text-[40px]"
            onClick={() => setSelectedImage(null)}
          >
            <i className="bx bx-x"></i>
          </button>
          <button
            className="flex items-center justify-center top-1/2 text-[50px] bg-[#ffffff30] w-fit h-fit rounded-lg absolute text-white left-[5%] group transition-transform duration-300 ease-in-out hover:translate-x-[-20%]"
            onClick={(e) => {
              e.stopPropagation();
              handlePhotoNavClick({ type: "prev" });
            }}
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <img
            src={selectedImage.src}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {selectedImage.caption && (
            <div className="img-caption absolute bg-black bottom-8 w-4/5 text-gray-400 text-center py-1 px-3">{selectedImage.caption}</div>
          )}
          <button
            className="flex items-center justify-center top-1/2 text-[50px] bg-[#ffffff30] w-fit h-fit rounded-lg absolute text-white right-[5%] group transition-transform duration-300 ease-in-out hover:translate-x-[20%]"
            onClick={(e) => {
              e.stopPropagation();
              handlePhotoNavClick({ type: "next" });
            }}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
