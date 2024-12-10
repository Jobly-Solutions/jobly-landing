import React from 'react';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ className, reverse, pauseOnHover, children }) => {
  return (
    <div className={`marquee-container ${className || ''}`}>
      <div className={`marquee ${reverse ? 'reverse' : ''} ${pauseOnHover ? 'pause-on-hover' : ''}`}>
        {children}
      </div>
    </div>
  );
};
 
export default Marquee;

