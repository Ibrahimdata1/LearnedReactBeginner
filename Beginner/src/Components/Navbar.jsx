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

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = React.useState(false);
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
            <BadgeCart />
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
    </NavbarContainer>
  );
};

export default Navbar;
