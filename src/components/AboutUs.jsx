import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter,faGooglePlus,faInstagram } from '@fortawesome/free-brands-svg-icons';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Welcome to CraftHub Welding</h2>
          <p>
            CraftHub Welding is your premier destination for unparalleled welding and metal fabrication services. Our unwavering commitment to excellence, combined with a team of seasoned professionals, ensures that we deliver bespoke solutions tailored to meet the unique needs of our clients.
          </p>
        </div>
        <div className="intro-image">
          <img src="./images/about_us.jpg" alt="CraftHub Welding Facility" />
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Expert Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="./images/team_member1.jpg" alt="John Doe - Lead Welder" />
            <h3>John Doe</h3>
            <p>Lead Welder</p>
            <FontAwesomeIcon icon={faFacebook} className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faGooglePlus} className='icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon' />
          </div>
          <div className="team-member">
            <img src="./images/team_member2.jpg" alt="Jane Smith - Metal Fabrication Specialist" />
            <h3>Jane Smith</h3>
            <p>Metal Fabrication Specialist</p>
            <FontAwesomeIcon icon={faFacebook} className='icon' />
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faGooglePlus} className='icon'/>
            <FontAwesomeIcon icon={faInstagram} className='icon'/>
          </div>
          <div className="team-member">
            <img src="./images/team_member3.jpg" alt="Robert Johnson - Quality Assurance" />
            <h3>Robert Johnson</h3>
            <p>Quality Assurance</p>
            <FontAwesomeIcon icon={faFacebook} className='icon'/>
            <FontAwesomeIcon icon={faTwitter} className='icon'/>
            <FontAwesomeIcon icon={faGooglePlus} className='icon' />
            <FontAwesomeIcon icon={faInstagram}className='icon' />
          </div>
        </div>
      </section>

      <section className="facility-section">
        <h2>Our Cutting-Edge Facility</h2>
        <p>
          Step into our state-of-the-art facility, where innovation meets precision. Equipped with cutting-edge technology and advanced machinery, we excel in handling projects of diverse complexities. From meticulous welding to crafting custom metal masterpieces, we have the capabilities to transform your ideas into reality.
        </p>
        <img src="./images/facility.jpg" alt="CraftHub Welding Facility" />
      </section>
    </div>
  );
};

export default AboutUs;
