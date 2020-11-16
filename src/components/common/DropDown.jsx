import React, {useState} from "react";
import { initialTheme } from '../../theme';
import styled from 'styled-components';
import Avatar from './Avatar';
import { Row, Col } from 'styled-bootstrap-grid';

const DropDownContainer = styled.div`
  background: ${initialTheme.inputBg};
  border: 1px solid ${initialTheme.inputBorderColor};
  border-radius: 4px;
  color: ${initialTheme.inputColor};
  padding: 0 24px;
  height: 40px;
  margin: 8px 0;
`
const Icon = styled.i`
  float: right;
  font-size: 8px;
  margin: 16px 0;
`

const DropDownHeader = styled(Row)`
`

const DropDownHeaderTitle = styled.div`
  padding: 8px 0;
`

const DropDownList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`
const DropDownListItem = styled.li`
  list-style: none;
  padding: 8px 16px;
`

const DropDownListItemContainer = styled(Row)`
  background: ${initialTheme.inputBg};
  color: ${initialTheme.inputColor};
  height: 40px;
`

function DropDown({title, list}) {
  const[ listOpen, setListOpen ] = useState(false);
  
  const toggleList = () => {
    setListOpen(!listOpen)
  }
  
  return (
    <DropDownContainer>
      <DropDownHeader role='button' onClick={toggleList}>
        <Col xs={4} sm={4} md={4} lg={4} xl={3}>
          <Avatar name='TE' small style={{padding: '2px 0'}}/>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={3}>
          <DropDownHeaderTitle>{title}</DropDownHeaderTitle>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={6}>
          {listOpen
            ? <Icon className="icon-arrow-up"/>
            : <Icon className="icon-arrow-down"/>
          }
        </Col>
      </DropDownHeader>
      {listOpen &&
      <DropDownList>
        {list.map((item) =>(
          <DropDownListItemContainer key={item.id}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Avatar name='TE' small style={{padding: '2px 0'}}/>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <DropDownListItem> {item.title} </DropDownListItem>
            </Col>
          </DropDownListItemContainer>
        ))}
      </DropDownList>}
    </DropDownContainer>
  );
}

export default DropDown;
