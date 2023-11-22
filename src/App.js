import { Switch, Route, Redirect, HashRouter, NavLink } from "react-router-dom";
import agh from "./images/agh_logo.png";
import home from "./images/house.svg";
import eye from "./images/eye.svg";
import pin from "./images/pin.svg";
import styled from "styled-components";
import Home from "./Home";
import Map from "./Map";
import Visualization from "./Visualization";

const Nav = styled.nav`
  margin: auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
`;

const StyledLi = styled.li`
  display:flex;
  flex-direction: column;
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 20px;
  text-decoration: none;
  color: black;
`;

const Agh = styled.img`
  height: 160px;
`;

const Svg = styled.img`
  height: 30px;
`;

const App = () => (
  <HashRouter>
    <Nav>
      <StyledNavLink to="/">
        <Agh src={agh}></Agh>
      </StyledNavLink>
      <StyledUl>
        <StyledLi>
          <Svg src={home}></Svg>
          <StyledNavLink to="/home">HOME</StyledNavLink>
        </StyledLi>
        <StyledLi>
        <Svg src={eye}></Svg>
          <StyledNavLink to="/visualization">VISUALIZATION</StyledNavLink>
        </StyledLi>
        <StyledLi>
        <Svg src={pin}></Svg>
          <StyledNavLink to="/map">MAP</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </Nav>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/visualization">
        <Visualization />
        hej
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Redirect to="/home" />
    </Switch>
  </HashRouter>
);

export default App;

