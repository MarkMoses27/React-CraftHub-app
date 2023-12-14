import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const scrollToTopStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#fcb900',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '20px',
  display: 'none',
  transition: 'background-color 0.3s',
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        ...scrollToTopStyles,
        display: isVisible ? 'block' : 'none',
      }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ScrollToTop;
