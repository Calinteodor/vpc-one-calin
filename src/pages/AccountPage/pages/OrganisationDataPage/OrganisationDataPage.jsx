import React, {useState} from "react";
import Form from '../../../../components/common/Form'
import { Row, Col } from 'styled-bootstrap-grid';

function OrganisationDataPage() {
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  
  function handleSave(e) {
    e.preventDefault();
    if(!loginIsValid()) return;
    setSaving(true);
  }
  
  function loginIsValid() {
    const nameInput = document.getElementById('name'),
      phoneInput = document.getElementById('phone'),
      countryInput = document.getElementById('country'),
      addressInput = document.getElementById('address'),
      countyInput = document.getElementById('county'),
      postalInput = document.getElementById('postal'),
      errors = {};
    
    if (nameInput.value.length === 0) errors.name = 'Name is required';
    if (phoneInput.value.length === 0) errors.phone = 'Phone is required';
    if (countryInput.value.length === 0) errors.country = 'Please select your country of residence';
    if (addressInput.value.length === 0) errors.address = 'Address is required';
    if (countyInput.value.length === 0) errors.county = 'Please select your county of residence';
    if (postalInput.value.length === 0) errors.postal = 'Postal code is required';
    
    setErrors(errors);
    
    return Object.keys(errors).length === 0;
  }
  
  return (
    <>
      <Row>
        <Col col lgOffset={3} mdOffset={4} xs={12}>
          <Form errors={errors} onSave={handleSave} saving={saving}/>
        </Col>
      </Row>
    </>
  );
}

export default OrganisationDataPage;
