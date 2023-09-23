import { SearchContainer,SearchContent,ProfileContainer,IconLink } from "../Styles/SearchBar.style"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchContent>
        <input type="text" placeholder="Search books name..."></input>
      </SearchContent>
      <ProfileContainer>
        <IconLink>
            <FavoriteBorderIcon/>
        </IconLink>
        <IconLink>
            <PersonOutlineOutlinedIcon/>
        </IconLink>
        <IconLink>
            <ShoppingCartOutlinedIcon/>
        </IconLink>
      </ProfileContainer>
    </SearchContainer>
  )
}

export default SearchBar
