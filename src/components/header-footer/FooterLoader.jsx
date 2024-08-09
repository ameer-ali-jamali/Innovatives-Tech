import React from "react";

const FooterLoader = ({ loading }) => {
  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      {loading && <span>Loading more data...</span>}
    </div>
  );
};

export default FooterLoader;
