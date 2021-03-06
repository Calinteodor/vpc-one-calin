import React from 'react';
import { initialTheme } from '../../theme';
import styled, { css } from 'styled-components';

const LogoImage = styled.img`
  width: 136px;
  
  ${({ isSmall }) => isSmall && css`
  width: 88px;`}
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

function Logo({isSmall}) {
  return (
    <LogoContainer>
      {isSmall ? <LogoImage src='vpc-logo-small.svg' alt="logo" isSmall={isSmall} /> :
        <LogoImage src='vpc-logo-big.svg' alt="logo" />}
    </LogoContainer>
  );
}

export default Logo;
