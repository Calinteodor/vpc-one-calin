import React from "react";
import { initialTheme } from '../../theme';
import styled, { css } from 'styled-components';

const ButtonContainer = styled.button`
    background-color: ${initialTheme.dark400};
    border-radius: 4px;
    border: 1px solid transparent;
    color: ${initialTheme.secondary};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 24px;
    
    &:hover {
        background-color: ${initialTheme.btnHoverBg};
        color: ${initialTheme.white};
        border: 1px solid ${initialTheme.btnHoverBorderColor};
    }
    
    ${({ isSubmit }) => isSubmit && css `
    background-color: ${initialTheme.dark300};
    color: ${initialTheme.primary};`}
    
    ${({ isText }) => isText && css `
    background-color: transparent;`}
    
    ${({ disabled }) => disabled && css `
    background-color: ${initialTheme.btnDisabledBg};
    color: ${initialTheme.dark};
    cursor: default;
    
    &:hover {
        background-color: ${initialTheme.btnDisabledHover};
        border: 1px solid ${initialTheme.btnDisabledBorderColor};
    }`}
`

const Button = ({style, name, isText, disabled, isSubmit, onClick, type}) => {
  return (
    <ButtonContainer isText={isText} disabled={disabled} isSubmit={isSubmit} style={style} onClick={onClick} type={type}>
      {name.toUpperCase()}
    </ButtonContainer>
  )
}

export default Button;