import React from "react";
import { initialTheme } from '../../theme';
import styled, { css } from 'styled-components';

const AvatarContainer = styled.div`
  height: 100%
`
const AvatarText = styled.span`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

const UploadBtn = styled.a`
  color: ${initialTheme.primary};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  justify-content: center;
  margin: 0 auto;
`

const AvatarMain = styled.div`
  color:${initialTheme.white};
  background-color: ${initialTheme.light600};
  border-radius: 50%;
  display: inline-block;
  font-size: 56px;
  height: 120px;
  position: relative;
  text-align: center;
  width: 120px;
  
  ${({ small }) => small && css `
  border: 1px solid ${initialTheme.dark};
  box-shadow: 0 0 0 1px ${initialTheme.light600};
  font-size: 12px;
  height: 32px;
  width: 32px;`}
`

const Avatar = ({name, small, upload, style}) => {
  return (
    <AvatarContainer style={style}>
      <AvatarMain small={small}>
        <AvatarText>
          {name.toUpperCase()}
        </AvatarText>
      </AvatarMain>
      {upload && <UploadBtn>Change</UploadBtn>}
    </AvatarContainer>
  )
}


export default Avatar;