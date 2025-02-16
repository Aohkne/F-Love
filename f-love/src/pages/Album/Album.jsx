import { useEffect, useState, useCallback, memo, Suspense } from 'react';
import Header from '../../layouts/Header/Header';
import Nav from '../../layouts/Nav/Nav';
import styles from './Album.module.scss';
import classNames from 'classnames/bind';
import { ErrorBoundary } from 'react-error-boundary';

const cx = classNames.bind(styles);

// memo image component
const ImageItem = memo(({ src, alt, onClick, isSelected }) => (
  <img src={src} alt={alt} onClick={onClick} className={isSelected ? cx('enlarged') : ''} loading='lazy' />
));

// error Component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className={cx('error-container')}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

// loading component
const LoadingSpinner = () => <div className={cx('loading-spinner')}>Loading...</div>;

// sliedshow component
const Slideshow = memo(({ data, onClose, onImageClick, selectedImage }) => (
  <div className={cx('slideshow')} onClick={(e) => e.stopPropagation()}>
    <span className={cx('close-btn')} onClick={onClose}>
      &times;
    </span>
    <div className={cx('slides')}>
      {data.map((item, index) => (
        <ImageItem
          key={`image-${index}`}
          src={item.img}
          alt={`Memory ${index + 1}`}
          onClick={() => onImageClick(item.img)}
          isSelected={selectedImage === item.img}
        />
      ))}
    </div>
  </div>
));

// fullscreen image component
const EnlargedImage = memo(({ src, onClose }) => (
  <div className={cx('image-overlay')} onClick={onClose}>
    <img src={src} alt='Enlarged view' className={cx('image-enlarged')} />
  </div>
));

function Album() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/data/memory.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
      console.error('Error loading image data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleOverlay = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSelectedImage(null);
  }, []);

  const handleImageClick = useCallback((imgSrc) => {
    setSelectedImage(imgSrc);
  }, []);

  const handleOverlayClick = useCallback((e) => {
    if (e.target.classList.contains(cx('overlay'))) {
      setSelectedImage(null);
      setIsOpen(false);
    }
  }, []);

  if (error) {
    return (
      <div className={cx('error-message')}>
        Error: {error}
        <button onClick={fetchData}>Retry</button>
      </div>
    );
  }

  return (
    <div className={cx('wrapper')}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setError(null);
          fetchData();
        }}
      >
        <Header />
        <div className={cx('letter-container')}>
          <button onClick={toggleOverlay} disabled={isLoading || error}>
            Look Back
          </button>
          <Nav />
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          {isLoading && <LoadingSpinner />}

          {isOpen && (
            <div className={cx('overlay')} onClick={handleOverlayClick}>
              <Slideshow
                data={data}
                onClose={toggleOverlay}
                onImageClick={handleImageClick}
                selectedImage={selectedImage}
              />
            </div>
          )}

          {selectedImage && <EnlargedImage src={selectedImage} onClose={() => setSelectedImage(null)} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default memo(Album);
