// usercard.jsx

import React from 'react';


const Usercard = () => {
  // Static data
  const profilePhoto = "https://www.behance.net/gallery/125369651/MCU-Iron-Man"; 
  const name = "Sibi";
  const email = "Sibi16@gmail.com";
  const phone = "123456789";
  const address = "1234 Elm Street, Springfield, IL, 62701";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="User Profile" className="profile-photo" />
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">Email: {email}</p>
        <p className="user-phone">Phone: {phone}</p>
        <p className="user-address">Address: {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
