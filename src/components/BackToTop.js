import React, { useEffect, useState } from 'react';
import { IoArrowUpCircle } from 'react-icons/io5';
import '../styles/backtotop.css'; 

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${visible ? 'visible' : ''}`} onClick={handleClick}>
      <IoArrowUpCircle className="icon" />
    </div>
  );
};

export default BackToTop;
