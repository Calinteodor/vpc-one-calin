import React, {useState, useEffect} from 'react';
import Avatar from './Avatar'
import TextInput from './TextInput'
import Select from './Select'
import Button from './Button'
import { countriesData } from '../../tools/countriesData';
import { countiesData } from '../../tools/countiesData';
import { vatData } from '../../tools/vatData';
import { prefixFlagData } from '../../tools/prefixFlagData';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { initialTheme } from '../../theme'

const FormContainer = styled.form`
  height: 100%;
  width: 420px;
  
  @media screen and (max-width: 768px) {
    padding: 24px;
    width: unset;
  }
`
const OptionalInfo = styled.span`
  color: ${initialTheme.light600};
  float: left;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
`

const BillingAddress = styled.div`
  color: ${initialTheme.light600};
  margin: 40px 0 8px 0;
  font-weight: bold;
  text-transform: uppercase;
`

const ButtonContainer = styled.div`
  margin: ${initialTheme.submitButtonMargin} 0;
`

function Form({saving, errors = {}}) {
  const [formData, setFormData] = useState({});
  const [canSubmit, setCanSubmit] = useState(false);
  
  useEffect(() => {
    const formValues = Object.values(formData);
    const formKeysLength = Object.keys(formData).length > 7;
    const formHasEmptyValues = formValues.some((i) => {
      return i === '';
    })
    
    if (!formHasEmptyValues && formKeysLength) {
      setCanSubmit(true);
    }
  }, [formData])
  
  const updateFormData = (e) => {
    const {name, value } = e.target;
    setFormData({...formData, [name]: value});
  }
  
  return (
    <FormContainer>
      <Row style={{textAlign: 'center'}}>
        <Col col xs={12} sm={12} md={4}>
          <Avatar name='TE'
                  upload
          />
        </Col>
        <Col col xs={12} sm={12} md={8}>
          <TextInput name='name'
                     id='name'
                     placeholder='Name'
                     onChange={updateFormData}
                     error={errors.name}
          />
          <Select name='vat'
                  isSmall={true}
                  defaultOption='VAT'
                  options={ vatData.map(vat =>
                    ({ value: vat.code,
                      text: vat.name })
                  )}
                  onChange={updateFormData}
          />
          <OptionalInfo>This field is optional</OptionalInfo>
          <Select name='phone'
                  id='phone'
                  isSmall={true}
                  options={ prefixFlagData.map(flag =>
                    ({ value: flag.code,
                      text: flag.dial_code,
                      image: flag.file_url})
                  )}
                  error={errors.phone}
                  onChange={updateFormData}
          />
        </Col>
      </Row>
      <BillingAddress>Billing address</BillingAddress>
      <Select name='country'
              id='country'
              defaultOption='Select country'
              options={ countriesData.map(country =>
                ({ value: country.code,
                  text: country.name })
              )}
              error={errors.country}
              onChange={updateFormData}
      />
      <TextInput name='address'
                 id='address'
                 placeholder='Address'
                 error={errors.address}
                 onChange={updateFormData}
      />
      <TextInput name='address2'
                 id='address'
                 placeholder='Address 2'
                 error={errors.address}
                 onChange={updateFormData}
      />
      <Row>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Select name='county'
                  id='county'
                  defaultOption='Select county'
                  options={ countiesData.map(county =>
                    ({ value: county.code,
                      text: county.name })
                  )}
                  error={errors.county}
                  onChange={updateFormData}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <TextInput name='postal'
                     id='postal'
                     placeholder='PO'
                     isSmall
                     error={errors.postalCode}
                     onChange={updateFormData}
          />
        </Col>
      </Row>
      <ButtonContainer>
        <Button name='Cancel'
                isText
                type='reset'
                style={{float: 'left'}}/>
        <Button name='Save'
                disabled={!canSubmit}
                isSubmit={canSubmit}
                style={{float: 'right'}}
        />
      </ButtonContainer>
    </FormContainer>
  )
}

export default Form;