import React from "react";

const Rectangle61 = () => {
  const handleClick = () => {
    console.log("its clicked");
  };

  return (
    <div
      style={{
        width: '1238px',
        height: '180px',
        top: '891px',
        left: '100px',
        borderRadius: '0px 0px 200px 0px',
        backgroundColor: 'rgba(160, 185, 198, 0.08)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={handleClick}
    >
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      </div>
      <button className="Facebook">Facebook</button>      <button>Google Ads</button>
      <button>Propeller</button>
      <button>Taboola</button>
    </div>

  );
};

export default Rectangle61;