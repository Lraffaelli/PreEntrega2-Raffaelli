import { NavBarStyled } from "../StyledComponent/NavBar"
import CartWidget from "./CartWidget"
import LogoBox from "./LogoBox"

import Nav from "./Nav"

const NavBar = () => {
  return (
    <NavBarStyled>
      <LogoBox/>
      <Nav/>
      <CartWidget/>
    </NavBarStyled>
  )
}

export default NavBar