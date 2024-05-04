// TypingAnim.js
import React, { useState, useEffect } from 'react';

const TypingAnim = ({ text }) => {
  const [showText, setShowText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText((prevText) => prevText + text.charAt(text.length - prevText.length));
      if (showText.length === text.length) {
        clearInterval(timer);
      }
    }, 100); // Adjust speed by changing the interval duration

    return () => clearInterval(timer);
  }, [text, showText]);

  return <p>{showText}</p>;
};

export default TypingAnim;
