import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Photo from './Photo';
import photos from './data';

const PhotoGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photoData, setPhotoData] = useState(photos);

  useEffect(() => {
    if (id) {
      const photoIndex = photoData.findIndex(
        photo => photo.id === parseInt(id, 10)
      );
      if (photoIndex !== -1) {
        setCurrentPhotoIndex(photoIndex);
      }
    } else {
      const randomIndex = Math.floor(Math.random() * photoData.length);
      setCurrentPhotoIndex(randomIndex);
      navigate(`/photo/${photoData[randomIndex].id}`);
    }
  }, [id, photoData, navigate]);

  const handleRate = (id, newRating) => {
    const updatedPhotos = photoData.map(photo =>
      photo.id === id ? { ...photo, rating: newRating } : photo
    );
    setPhotoData(updatedPhotos);
  };

  const handleNext = () => {
    if (currentPhotoIndex < photoData.length - 1) {
      const nextIndex = currentPhotoIndex + 1;
      setCurrentPhotoIndex(nextIndex);
      navigate(`/photo/${photoData[nextIndex].id}`);
    }
  };

  const handlePrev = () => {
    if (currentPhotoIndex > 0) {
      const prevIndex = currentPhotoIndex - 1;
      setCurrentPhotoIndex(prevIndex);
      navigate(`/photo/${photoData[prevIndex].id}`);
    }
  };

  return (
    <div>
      <Photo photo={photoData[currentPhotoIndex]} onRate={handleRate} />
      <div>
        {currentPhotoIndex > 0 && <button onClick={handlePrev}>{'<'}</button>}
        {currentPhotoIndex < photoData.length - 1 && (
          <button onClick={handleNext}>{'>'}</button>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
