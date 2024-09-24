import React from "react";

interface HeadingType {
  value: string;
}
const Heading = ({ value }: HeadingType) => {
  return <h1 className="pl-2 mt-2">{value}</h1>;
};

export default Heading;
