import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px 27px;
  background: #fff;
  box-shadow: 0px -7px 104px -20px rgba(0, 0, 0, 0.2);
  border-radius: 40px 40px 0px 0px;
`;

export const MainNav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 5px;
`;

export const StyledLink = styled(Link)`
  color: #bbbbbb;
  padding: 13px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
