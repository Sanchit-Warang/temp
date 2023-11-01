import React from "react";

export default function Icon({ icon_name, h, w }) {
  return (
    <>
      <img
        src={`/images/${icon_name}`}
        style={{
          height: `${h}`,
          width: `${w}`,
        }}
        alt=""
      />
    </>
  );
}
