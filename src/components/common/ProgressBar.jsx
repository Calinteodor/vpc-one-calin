import React from 'react';
import { initialTheme } from '../../theme';
import styled from 'styled-components';

const Bar = styled.progress`
  bottom: 8px;
  color: ${initialTheme.secondary};
  font-size: 12px;
  font-weight: bold;
  left: 25%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
  
  ::before {
    content: 'USAGE';
  }
  
  ::after {
    content: '78%';
    position: absolute;
    top: 0;
    right: 0;
  }
  
  &[value] {
    appearance: none;
    height: 6px;
    width: 160px;
    
    ::-webkit-progress-bar {
      background-color: ${initialTheme.dark100};
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }
    
    ::-webkit-progress-value {
      background-color: ${initialTheme.bgLight};
      border-radius: 8px;
    }
  }`;

function ProgressBar() {
  return (
    <>
      <Bar max="100" value="78"/>
    </>
  );
}

export default ProgressBar;
