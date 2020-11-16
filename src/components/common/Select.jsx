import React from "react";
import { initialTheme } from '../../theme';
import styled from 'styled-components';

const SelectInput = styled.select`
  background: ${initialTheme.inputBg};
  border: 1px solid ${initialTheme.inputBorderColor};
  border-radius: 4px;
  color: ${initialTheme.inputColor};
  padding: 0 24px;
  height: 48px;
  margin: 8px 0;
  width: 100%;
`

const SelectInputOption = styled.option`
  background: ${initialTheme.inputBg};
  border: 1px solid ${initialTheme.inputBorderColor};
  color: ${initialTheme.inputColor};
`

const SelectInputOptionImage = styled.svg`
  height: 16px;
  width: 16px;
`

function Select ({ name, onChange, defaultOption, value, error, options}) {
  
  return (
    <div className="form-group">
      <div className="field">
        <SelectInput
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <SelectInputOption value="">{defaultOption}</SelectInputOption>
          {options.map(option => {
            return (
              <SelectInputOption key={option.value} value={option.value}>
                {option.text}
                <SelectInputOptionImage width='40' height='40' xmlns={option.image} />
              </SelectInputOption>
            );
          })}
        </SelectInput>
        {error && <span className="alert alert-danger">{error}</span>}
      </div>
    </div>
  );
}

export default Select;
