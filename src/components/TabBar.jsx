import React from 'react';
import { initialTheme } from '../theme';
import styled from 'styled-components';

const TabBarContainer = styled.div`
  border-bottom: 1px solid ${initialTheme.light600};
  display: flex;
  position: relative;
  left: 23%;
  margin: 24px 0;
  width: 72%;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (max-width: 992px) {
    left: 34%;
    width: 63%;
  }
  
  @media (min-width: 992px) {
    left: 25%;
    width: 74%;
  }
  
  a {
    border-bottom: 3px solid transparent;
    color: ${initialTheme.light600};
    float: left;
    font-size: 12px;
    font-weight: bold;
    margin-right: 48px;
    padding: 16px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.4s;
    
    @media (max-width: 992px) {
      font-size: 10px;
      margin-right: 24px;
    }
  }
`;

function TabBar({children}) {
  return (
    <TabBarContainer>
      {children}
    </TabBarContainer>
  );
}

export default TabBar;
