import React from "react";

const SecondStep = ({ formData, setFormData, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <button onClick={prevStep}>Back</button>
      <button>Submit</button>
    </div>
  );
};

export default SecondStep;
