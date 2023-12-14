// Import necessary components and styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './ContactBanner.css';

// ContactBanner component
const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@crafthub.com</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <span>123-456-7890</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Kimathi Stret, Nairobi, Kenya</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faClock} />
          <span>Mon-Fri: 8am - 6pm</span>
        </div>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTiktok} />
      </div>
    </div>
  );
};

export default ContactBanner;
