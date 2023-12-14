import './Projects.css';

const Projects = () => {
  return (
    <div className='project-container'>
      <section className='project-text'>
        <h1>Our Projects</h1>
        <p>Explore our portfolio showcasing the finest welding craftsmanship in the industry.</p>
      </section>
      <section>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image2.jpg' alt='Project 1' />
          </div>
          <div className='project-card-text'>
            <h2>Industrial Steel Sculpture</h2>
            <p>Crafting a unique steel sculpture for a prominent industrial client, showcasing creativity and precision in welding.</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image3.jpg' alt='Project 2' />
          </div>
          <div className='project-card-text'>
            <h2>Custom Metal Furniture</h2>
            <p>Designing and fabricating bespoke metal furniture pieces, combining functionality with aesthetic appeal.</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image5.jpg' alt='Project 3' />
          </div>
          <div className='project-card-text'>
            <h2>Precision Welding for Aerospace</h2>
            <p>Providing precision welding solutions for critical aerospace components, ensuring top-notch quality and safety standards.</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image2.jpg' alt='Project 4' />
          </div>
          <div className='project-card-text'>
            <h2>Architectural Metalwork</h2>
            <p>Collaborating with architects to bring intricate metalwork designs to life, enhancing the beauty of architectural projects.</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image2.jpg' alt='Project 5' />
          </div>
          <div className='project-card-text'>
            <h2>Heavy-Duty Welding for Construction</h2>
            <p>Executing robust welding solutions for heavy-duty construction projects, ensuring structural integrity and durability.</p>
          </div>
        </div>
        <div className='project-card'>
          <div className='project-card-img'>
            <img src='./images/image4.jpg' alt='Project 6' />
          </div>
          <div className='project-card-text'>
            <h2>Automotive Welding Innovations</h2>
            <p>Contributing to the automotive industry with innovative welding techniques, optimizing strength and performance in vehicle components.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
