import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { AppBar, Box, List, ListItem } from '@mui/material';
import { StyledAppBar, StyledHamburger, StyledNavigation, StyledSearch } from './styled';
import Logo from '../../assets/logo.png';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const menuItems = [
  { label: "Iphone 14", path: "/iphone-14" },
  { label: "Deals", path: "/deals" },
  { label: "Products", path: "/products" },
  { label: "Android", path: "/products/android" },
  { label: "Apple", path: "/products/apple" },
  { label: "Tablets", path: "/products/tablets" }
]

const Navbar = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <StyledAppBar position="static" elevation={0}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/" className='logo'>
                <img src={Logo} alt="e-smart" width="110" height="103"/>
              </Link>
              <StyledSearch>
                <InputBase />
                <SearchIcon />
              </StyledSearch>
              <StyledHamburger active={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </StyledHamburger>
              <StyledNavigation active={mobileNavOpen} className='primary-navigation'>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index}>
                      <Link to={item.path}>{item.label}</Link>
                    </ListItem>
                  ))}
                </List>
              </StyledNavigation>
            </Toolbar>
        </Container>
    </StyledAppBar>
  )
}

export default Navbar