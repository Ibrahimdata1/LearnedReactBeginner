import React from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  LeftBrandLogo,
  OpenLinksButton,
  NavbarLinkExtend,
} from "../Styles/Navbar.style";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BadgeCart from "./BadgeCart";
import { CartContext } from "./Context";
import ModalCart from "../Components/ModalCart";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = React.useState(false);
  const {handleOpen} = React.useContext(CartContext)
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftBrandLogo>
          <Logo>
            <ImportContactsIcon style={{ fontSize: "50px" }} />
          </Logo>
        </LeftBrandLogo>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">About Us</NavbarLink>
            <NavbarLink to="/about">Contact Us</NavbarLink>
            <OpenLinksButton onClick={() => setExtendNavbar((curr) => !curr)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}{" "}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo style={{ display: "flex", alignItems: "flex-end" }}>
            <a onClick={handleOpen}>
              <BadgeCart />
            </a>
          </Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
          <NavbarLinkExtend to="/products">Products</NavbarLinkExtend>
          <NavbarLinkExtend to="/contact">About Us</NavbarLinkExtend>
          <NavbarLinkExtend to="/about">Contact Us</NavbarLinkExtend>
        </NavbarExtendedContainer>
      )}
      <ModalCart/>
    </NavbarContainer>
  );
};

export default Navbar;
