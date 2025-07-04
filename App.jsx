import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    position: "",
    mobile: "",
    email: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      name: "",
      position: "",
      mobile: "",
      email: "",
      address: "",
      photo: null,
    });
  };

  return (
    <div className="container">
      <h2>Company Details Form</h2>
      <div className="form">
        <label>Company Name <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} /></label>
        <label>Name <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Position <input type="text" name="position" value={formData.position} onChange={handleChange} /></label>
        <label>Mobile <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} /></label>
        <label>Email <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
        <label>Address <input type="text" name="address" value={formData.address} onChange={handleChange} /></label>
        <label>Photo <input type="file" name="photo" accept="image/*" onChange={handleChange} /></label>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>{formData.companyName || "Company Name"}</h3>
          
        </div>
        {formData.photo && <img src={formData.photo} alt="Profile" className="profile-pic" />}
        <div className="card-body">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}</p>
        </div>
        <div className="card-footer">
          {formData.website && <p>{formData.website}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
