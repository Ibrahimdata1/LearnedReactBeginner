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
  HoverSpace,
} from "../Styles/Navbar.style";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BadgeCart from "./BadgeCart";
import { CartContext } from "./Context";
import ModalCart from "../Components/ModalCart";
import { motion } from "framer-motion";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = React.useState(false);
  const { handleOpen } = React.useContext(CartContext);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftBrandLogo>
          <a href="/" style={{ color: "white" }}>
            <Logo  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
              <ImportContactsIcon style={{ fontSize: "50px" }}/>
            </Logo>
          </a>
        </LeftBrandLogo>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/student">Student Of Knowledge</NavbarLink>
            <NavbarLink to="/about">Contact Us</NavbarLink>
            <OpenLinksButton onClick={() => setExtendNavbar((curr) => !curr)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}{" "}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo style={{ display: "flex", alignItems: "flex-end" }} whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}>
            <a onClick={handleOpen}>
              <BadgeCart />
            </a>
          </Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtend to="/products">Products</NavbarLinkExtend>
          <NavbarLinkExtend to="/student">
            Student Of Knowledge
          </NavbarLinkExtend>
          <NavbarLinkExtend to="/about">Contact Us</NavbarLinkExtend>
        </NavbarExtendedContainer>
      )}
      <ModalCart />
    </NavbarContainer>
  );
};

export default Navbar;
