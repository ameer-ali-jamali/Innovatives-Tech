import React, { useState } from "react";

const ConditionalComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      {showComponent && <div>This is a conditionally rendered component!</div>}
    </div>
  );
};

export default ConditionalComponent;
