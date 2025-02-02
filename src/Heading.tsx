import { ReactNode } from 'react';
import './Heading.css';

interface heading {
  heading: string;
  headingcolor: string;
  children: ReactNode;
}

const Heading = ({ heading, headingcolor, children }:heading) => {
  return (
    <div className="main-container">
      <h1 style={{ color: headingcolor }}>{heading}</h1>
      <div className="children">
        {children}
      </div>
    </div>
  );
};

export default Heading;
