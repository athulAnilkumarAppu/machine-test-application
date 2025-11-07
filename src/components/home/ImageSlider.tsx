import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  getContinentList,
  getCurrentIndex,
  setCurrentIndex,
} from "../../slices/home-page-slice";

const ImageSlider = () => {
  const dispatch = useAppDispatch();

  const countries = useAppSelector(getContinentList);
  const currentIndex = useAppSelector(getCurrentIndex);

  const images = countries ? countries.map((item: any) => item.flag) : [];

  const handlePrev = () => {
    dispatch(
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    );
  };

  const handleNext = () => {
    dispatch(
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    );
  };

  const handleDotClick = (index: number) => {
    dispatch(setCurrentIndex(index));
  };

  const getVisibleDots = () => {
    if (images.length <= 3) return images.map((_: any, i: any) => i);
    if (currentIndex === 0) return [0, 1, 2];
    if (currentIndex === images.length - 1)
      return [images.length - 3, images.length - 2, images.length - 1];
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  const visibleDots = getVisibleDots();

  return (
    <div className="hero-card large">
      <div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="card-controls">
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="dots">
          {visibleDots.map((index: any) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            >
              ●
            </span>
          ))}
        </div>

        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
