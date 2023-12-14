// Services.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Services.css'; 

const Services = () => {
    return (
      <section className="services">
        <div className="services-image">
          <img src="./images/image2.jpg" alt="services" />
          <img src="./images/image3.jpg" alt="services" />
        </div>
        <div className="services-content">
          <h3>Welcome to CraftHub</h3>
          <h1>We are committed to quality</h1>
          <p>
            We are experts in providing superior products at a lower cost, and we
            have worked on Metal, Refinery, and Power projects. Our steel goods
            are of great quality, and we have a good reputation with our clients.
            I believe this is a nice start to a long-term relationship.
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} /> We provide 24/7 service</li>
            <li><FontAwesomeIcon icon={faCheck} /> Our products are of high quality</li>
            <li><FontAwesomeIcon icon={faCheck} /> We stick to deadlines</li>
            <li><FontAwesomeIcon icon={faCheck} /> We provide the best customer service</li>
            <li><FontAwesomeIcon icon={faCheck} /> We use the latest technology</li>
          </ul>
          <h2 className="highlight">
            CraftHub is a professional welding company in Kenya
          </h2>
        </div>
      </section>
    );
};

export default Services;
