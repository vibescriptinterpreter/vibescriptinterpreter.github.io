import { StyledFooter, MainNav, NavList, NavItem, StyledLink } from './styles';
import { ReactComponent as IconScan } from '../../icons/scan.svg';
import { ReactComponent as IconHistory } from '../../icons/history.svg';
import { ReactComponent as IconHome } from '../../icons/home.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <MainNav>
        <NavList>
          <NavItem>
            <StyledLink to="/account">
              <IconHome />
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/scan">
              <IconScan />
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/history">
              <IconHistory />
            </StyledLink>
          </NavItem>
        </NavList>
      </MainNav>
    </StyledFooter>
  );
};

export default Footer;
