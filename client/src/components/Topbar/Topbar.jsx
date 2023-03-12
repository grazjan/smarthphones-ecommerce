import { Container, IconButton, Box } from '@mui/material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledBadge, StyledTopbar } from './styled';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <StyledTopbar>
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="space-between" alignItems="center" className="topbar-inner">
                <Box className="topbar-msg">
                    Get 10% discount on all smartphones
                </Box>
                <Box display="flex">
                    <IconButton as={Link} disableRipple>
                        <Person2OutlinedIcon />
                        <span className="label">My Account</span>
                    </IconButton>
                    <IconButton as={Link} disableRipple>
                        <FavoriteIcon />
                        <span className="label">Favorites</span>
                    </IconButton>
                    <IconButton as={Link} disableRipple>
                        <StyledBadge badgeContent="2" color="primary">
                            <ShoppingCartIcon />
                            <span className="label">Cart</span>
                        </StyledBadge>
                    </IconButton>
                </Box> 
            </Box>
        </Container>
    </StyledTopbar>
  )
}

export default Topbar