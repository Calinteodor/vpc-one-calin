import React from 'react';
import { initialTheme } from '../../theme';
import styled from 'styled-components';

const LogoImage = styled.img`
  background: ${initialTheme.primary};
  height: 24px;
  width: 24px;
  `;

const LogoContainer = styled.div`
  align-items: center;
  color: ${initialTheme.primary};
  display: flex;
  font-size: 28px;
  font-weight: 100;
  height: 50%;
  margin: 24px;
  padding: 0 16px;
  `;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src='favicon.png' alt="logo" />
      <span style={{margin: '16px 8px'}}><strong>VPC</strong> ONE</span>
    </LogoContainer>
  );
}

export default Logo;
