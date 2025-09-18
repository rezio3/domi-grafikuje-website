import * as React from "react";
import "./SectionWrapper.scss";
type SectionWrapperProps = {
  children: React.ReactNode;
  width?: number;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return <div className="section-wrapper">{children}</div>;
};

export default SectionWrapper;
