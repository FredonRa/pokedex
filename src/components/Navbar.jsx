import styled from "styled-components";
import logo from "../../assets/logos/logo.png";

const NavStyledComponent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #dd1817;
  position: fixed;
  z-index: 2;
  > img {
    width: 150px;
  }
`;

const Navbar = () => {
  return (
    <NavStyledComponent>
      <img src={logo} alt="" />
    </NavStyledComponent>
  );
};

export default Navbar;
