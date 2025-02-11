import React from "react";
import image from "../assets/Rectangle 53.png";
import "./Contactpage.css";

function Contactpage() {
  const branches = [
    {
      id: 1,
      name: "Muzaffarnagar",
      address: "📍 Main Street, City Center",
      phone: "📞 +91 74177 85633",
      hours: "🕒 Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM",
      services: "📚 In-store shopping, 🎓 Student discounts, 🎤 Workshops, 📖 Study spaces",
    },
    {
      id: 2,
      name: "Ghaziabad",
      address: "📍 Knowledge Avenue, Downtown",
      phone: "📞 +91 74177 85634",
      hours: "🕒 Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM",
      services: "📚 In-store shopping, 🎓 Student discounts, 🎤 Workshops, 📖 Study spaces",
    },
    {
      id: 3,
      name: "Meerut",
      address: "📍 Literature Road, Central Market",
      phone: "📞 +91 74177 85635",
      hours: "🕒 Mon - Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM",
      services: "📚 In-store shopping, 🎓 Student discounts, 🎤 Workshops, 📖 Study spaces",
    },
  ];

  return (
    <div className="contact-container">
      {/* Header Image Section */}
      <div className="image-container">
        <img src={image} alt="Contact" className="about-image" />
      </div>

      {/* Contact Us Section */}
      <section className="about-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Feel free to reach out to any of our branches. Our team is ready to help
          you with book recommendations, store services, and any other inquiries.
        </p>
      </section>

      {/* Branch Details */}
      <section className="branches">
        <h2>Our Branches</h2>
        <div className="branches-container">
          {branches.map((branch) => (
            <div className="branch" key={branch.id}>
              <h3>{branch.name}</h3>
              <p>{branch.address}</p>
              <p>{branch.phone}</p>
              <p>{branch.hours}</p>
              <p>{branch.services}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contactpage;
