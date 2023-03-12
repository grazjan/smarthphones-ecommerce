import { Badge, Box } from '@mui/material';
import styled from '@emotion/styled';

/* Topbar */
export const StyledTopbar = styled(Box)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '& .topbar-inner': {
        [theme.breakpoints.down('sm')]: {
            justifyContent: "flex-end"
        },
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
        marginLeft: theme.spacing(1),
        '& .MuiSvgIcon-root': {
            margin: "0 auto",
            display: "block",
            fill: theme.palette.common.white,
            [theme.breakpoints.up('sm')]: {
                fontSize: "2rem"
            }
        },
        '& .label': {
            fontSize: "13px",
            fontWeight: "500",
            display: "none",
            color: theme.palette.common.white,
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