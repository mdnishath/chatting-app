import React from "react";

const Image = ({ src }) => {
  return (
    <img
      referrerPolicy="no-referrer"
      className="w-full rounded-full"
      src={src}
      alt="profile"
    />
  );
};

export default Image;
