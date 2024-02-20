'use client'

import { useState, useEffect } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  label: string;
  onHover?: (isHovered: boolean) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onHover }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [positionCss, setPositionCss]: any = useState('relative');

  useEffect(() => {
    const handleMouseEnter = () => {
      if (onHover) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight- 50);
        setPosition({ x, y });
        onHover(true);
      }
    };

    const handleMouseLeave = () => {
      onHover && onHover(false);
    };

    const button = document.getElementById('noButton');

    if (button) {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [onHover]);

  useEffect(() => {
      if(position.x != 0){
        setPositionCss('absolute')
      }
  }, [position])

  return (
    <button
      id="noButton"
      className={styles.button}
      style={{ left: `${position.x}px`, top: `${position.y}px`, position: positionCss}}
    >
      {label}
    </button>
  );
};

export default Button;
