import React from 'react';
import { initialTheme } from '../../theme';
import styled from 'styled-components';

const Input = styled.input`
  background: ${initialTheme.inputBg};
  border: 1px solid ${initialTheme.inputBorderColor};
  border-radius: 4px;
  color: ${initialTheme.inputColor};
  height: 40px;
  margin: 8px 0;
  padding: 24px;
  width: 100%;
  
  @media (max-width: 575px) {
    padding: 16px;
  }
  
  &:placeholder {
    color: ${initialTheme.inputPlaceholder};
    font-size: 1.5em;
  }
`

function TextInput ({name, placeholder, value, error, onChange}) {
  let wrapperClass = 'form-group';
  
  if (error && error.length > 0) {
    wrapperClass += "has-error";
  }
  
  return (
    <div className={wrapperClass}>
      <div className="field">
        <Input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <span className="alert alert-danger">{error}</span>}
      </div>
    </div>
  )
}

export default TextInput;