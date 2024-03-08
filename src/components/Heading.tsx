import React from "react";

const Heading = ({
  heading,
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return <p className={`text-3xl font-semibold pb-6`}>{heading}</p>;
};

export default Heading;
