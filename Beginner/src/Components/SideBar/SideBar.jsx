import { SideBarContainer,LogoContainer } from "../../Styles/SideBar.style"
import SideBarCategory from './SideBarCategory'
import SideBarPrice from './SideBarPrice'
import SideBarHarakat from './SideBarHarakat'
import SearchIcon from '@mui/icons-material/Search';

const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <SearchIcon style={{width:'2rem',height:'2rem'}}/>
      </LogoContainer>
      <SideBarCategory/>
      <SideBarPrice/>
      <SideBarHarakat/>
    </SideBarContainer>
  )
}

export default SideBar
