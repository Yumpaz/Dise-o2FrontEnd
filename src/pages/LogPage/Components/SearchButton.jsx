import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';

const SearchButton = () => {
  return (
    <IconButton type="submit" sx={{ p: "10px", bgcolor:"#FF595A"}} aria-label="search">
      <SearchIcon />
    </IconButton>
  );
};

export default SearchButton;
