import React from "react";

const FirstStep = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  return (
    <div>
      <h2>Step 1</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default FirstStep;
