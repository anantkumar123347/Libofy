import React from 'react';
import image from '../assets/Rectangle 53.png';
import './AboutPage.css';

function Aboutpage() {
  return (
    <div className="about-container">
      {/* Header Image Section */}
      <div className="image-container">
        <img src={image} alt="About" className="about-image" />
      </div>

      {/* About Us Section */}
      <section className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to Libofy BookPoint, your trusted source for a diverse range of books catering to every reader’s taste.
          Established with the mission to foster a love for reading in our community, we pride ourselves on providing
          excellent service and a wide selection of books. Our journey began in 2021, and since then, we have grown to
          become a beloved destination for book lovers.
        </p>
      </section>

      {/* Our Branches Section */}
      <section className="branches">
        <h2>Our Branches</h2>
        <div className="branches-container">
          <div className="branch">
            <h3>Muzaffarnagar</h3>
            <p>📍 Main Street, City Center</p>
            <p>📞 Contact: +91 74177 85633</p>
            <p>🕒 Operating Hours: Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM</p>
            <p>📚 In-store shopping, 🎓 Special discounts for students, 🎤 Workshops, 📖 Study spaces</p>
          </div>
          <div className="branch">
            <h3>Ghaziabad</h3>
            <p>📍 Main Street, City Center</p>
            <p>📞 Contact: +91 74177 85633</p>
            <p>🕒 Operating Hours: Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM</p>
            <p>📚 In-store shopping, 🎓 Special discounts for students, 🎤 Workshops, 📖 Study spaces</p>
          </div>
          <div className="branch">
            <h3>Meerut</h3>
            <p>📍 Main Street, City Center</p>
            <p>📞 Contact: +91 74177 85633</p>
            <p>🕒 Operating Hours: Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM</p>
            <p>📚 In-store shopping, 🎓 Special discounts for students, 🎤 Workshops, 📖 Study spaces</p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="commitment">
        <h2>Our Commitment</h2>
        <p>
          At Libofy BookPoint, we are committed to providing a welcoming and inspiring environment for all book
          enthusiasts. Our branches are staffed with knowledgeable and friendly team members ready to assist you in
          finding the perfect book. Whether you're looking for the latest bestseller, a rare find, or a cozy place to
          read, Libofy BookPoint is your destination.
        </p>
      </section>
    </div>
  );
}

export default Aboutpage;
