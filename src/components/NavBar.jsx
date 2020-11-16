import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import { NavBarData } from '../tools/NavBarData';
import Logo from './common/Logo'
import Header from './Header'
import { initialTheme } from '../theme';
import styled from 'styled-components';
import Button from './common/Button'

const SideBarOverlay = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    height: 100vh;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 997;
`

const SideBarContainer = styled.nav`
  background: ${initialTheme.leftSidebarBg};
  display: flex;
  height: 100vh;
  justify-content: center;
  left: -100%;
  position: fixed;
  top: 0;
  transition: 0.4s;
  width: ${initialTheme.sidebarWidth};
  
  @media (min-width: 768px) and (max-width: 1200px){
    width: 256px;
  }
  
  &.active {
    left: 0;
  }
`;

const SideBarList = styled.ul`
    padding: 0;
    width: 100%;
 `;

const SideBarListItem = styled.li`
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: flex-start;
  `;

const SideBarListItemText = styled(SideBarListItem)`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: flex-start;
    list-style: none;
    margin: 16px 24px;
    
    a {
      align-items: center;
      border-radius: 4px;
      color: ${initialTheme.leftSidebarColor};
      display: flex;
      font-size: 14px;
      font-weight: bold;
      padding: 0 16px;
      height: 100%;
      text-decoration: none;
      text-transform: uppercase;
      width: 95%;
      
      :hover {
        color: ${initialTheme.primary};
      }
    }
  `;

const SideBarListButton = styled(SideBarListItem)`
    bottom: 0;
    position: fixed;
    transform: translate(30%, -10%);
  `;

const CloseSideBarIcon = styled.div`
  color: ${initialTheme.primary};
  cursor: pointer;
  font-size: 16px;
  margin-right: 16px;
`

function NavBar() {
  const activeStyle = {color: `${initialTheme.primary}`};
  const [navBar, setNavBar] = useState(false);
  
  const toggleNavBar = () => {
    setNavBar(!navBar);
  };
  
  return (
    <>
      <Header onClick={toggleNavBar}/>
      {navBar && <SideBarOverlay>
        <SideBarContainer className={navBar && 'active'}>
          <SideBarList className='nav-menu-items'>
            {window.screen.width >= 540 ?
              <SideBarListItem>
                <Logo/>
              </SideBarListItem>
              : <SideBarListItem>
                <Logo isSmall/> <CloseSideBarIcon role='button' onClick={toggleNavBar}>X</CloseSideBarIcon>
              </SideBarListItem>
            }
            {NavBarData.map((item, index) => {
              return (
                <SideBarListItemText key={index}>
                  <NavLink to={item.path} activeStyle={activeStyle}>
                    <i className={item.icon} style={{margin: 0}}/>
                    <span style={{marginLeft: 16}}>{item.title}</span>
                  </NavLink>
                </SideBarListItemText>
              )
            })}
            <SideBarListButton>
              <Button name='Download app'/>
            </SideBarListButton>
          </SideBarList>
        </SideBarContainer>
      </SideBarOverlay>}
    </>
  );
}

export default NavBar;
