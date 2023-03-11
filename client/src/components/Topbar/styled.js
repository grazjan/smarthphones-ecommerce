import { Badge, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

/* Topbar */
export const StyledTopbar = styled(Box)(({ theme }) => ({
    '& .topbar-inner': {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "flex-end"
        }
    },
    '& .topbar-msg': {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    // Buttons
    '& .MuiIconButton-root': {
        textDecoration: "none",
        textAlign: "center",
        fontSize: "unset",
        '& .MuiSvgIcon-root': {
            margin: "0 auto",
            display: "block",
            [theme.breakpoints.up('sm')]: {
                fontSize: "2rem"
            }
        },
        '& .label': {
            fontSize: "12px",
            fontWeight: "bold",
            display: "none",
            [theme.breakpoints.up('sm')]: {
                display: "block"
            }
        }
    }
}));

/* Cart badge */
export const StyledBadge = styled(Badge)(({ theme }) => ({
    display: "block",
    '& .MuiBadge-badge': {
        top: "auto",
        bottom: 0
    }
}));