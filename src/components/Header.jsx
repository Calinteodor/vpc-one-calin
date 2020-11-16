import React from 'react';
import { initialTheme } from '../theme';
import styled from 'styled-components';
import ProgressBar from './common/ProgressBar';
import { Row, Col } from 'styled-bootstrap-grid';
import DropDown from './common/DropDown'
import { DropDownData } from '../tools/DropDownData';

const iconStyle = {
  color:`${initialTheme.primary}`,
  cursor: 'pointer',
  fontSize: 24,
  padding: 8
}

const headerStyle = {
  background:`${initialTheme.navbarBg}`,
  display: 'flex',
  height:`${initialTheme.navbarHeight}`,
  padding: '24px 16px'
}

const TeamAccountDescriptionContainer = styled(Col)`
  font-size: 12px;
  font-weight: 600;
  padding: 8px;
  
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (max-width: 992px) {
    font-size: 10px;
  }
`

const TeamAccountDescription = styled.span`
  color: ${initialTheme.light600};
  float:right;
`

const ColoredTeamAccountDescription = styled(TeamAccountDescription)`
  color: ${initialTheme.primary};
`

function Header({onClick}) {
  return (
    <Row style={headerStyle}>
      <Col col xs={2} sm={1} md={2} lg={3} xl={2}>
        <i onClick={onClick} className='icon-menu' style={iconStyle}/>
      </Col>
      <Col col xs={5} sm={6} md={5} lg={4} xl={4} style={{padding: 8}}>
        <ProgressBar/>
      </Col>
      <Col col xs={5} sm={5} md={5} lg={5} xl={6}>
        <Row>
          <TeamAccountDescriptionContainer col xs={0} sm={0} md={7} lg={7} xl={9}>
            <TeamAccountDescription>
              Do you need access for your team?
            </TeamAccountDescription>
            <br/>
            <ColoredTeamAccountDescription>
              Create a team account
            </ColoredTeamAccountDescription>
          </TeamAccountDescriptionContainer>
          <Col col xs={12} sm={12} md={5} lg={5} xl={3}>
            <DropDown title='test' list={DropDownData}/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
