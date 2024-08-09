import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <FirstStep
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <SecondStep
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
