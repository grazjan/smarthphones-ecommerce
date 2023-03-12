import { AppBar, Box } from "@mui/material";
import styled from '@emotion/styled';
 

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.common.white,
    '& .MuiToolbar-root': {
        position: "static"
    },
    [theme.breakpoints.down('sm')]: {
        '& .logo > img': {
            width: "84px", height: "auto"
        }
    },
}));

export const StyledNavigation = styled('nav')((props) => ({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        marginLeft: "auto",
        marginRight: `-${theme.spacing(2)}`
    },
    [theme.breakpoints.down('md')]: {
       position: "absolute",
       background: theme.palette.common.white,
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       zIndex: 101,
       transition: "all .4s",
       opacity: props.active ? 1 : 0,
       visibility: props.active ? "visible": "hidden",
       transform: props.active ? "translateX(0)" : "translateX(100%)" 

    },
    '& .MuiList-root': {
        '& .MuiListItem-root': {
            padding: 0,
            [theme.breakpoints.up('sm')]: {
                width: "auto",
                display: "inline-block",
            },
            //Nav Link
            '& > a': {
                padding: theme.spacing(3),
                textDecoration: "none",
                color: theme.palette.common.black,
                [theme.breakpoints.up('sm')]: {
                    fontSize: "18px"
                },
                '&:hover, &:focus, &.active': {
                    color: theme.palette.primary.main
                }
            }
        }
    }

}));

export const StyledHamburger = styled(Box)((props) => ({ theme }) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    zIndex: 102,
    '& span': {
        display: "block",
        width: "100%",
        height: "4px",
        backgroundColor: theme.palette.common.black,
        transition: ".4s",
        '&:nth-child(1)': {
            marginBottom: props.active ? 0 : "6px",
            transform: props.active && "rotate(45deg) translateY(12px)"
        },
        '&:nth-child(3)': {
            marginTop: props.active ? 0 : "6px",
            marginLeft: props.active ? "-11px" : 0,
            transform: props.active && "rotate(-45deg) translateY(3px)"
        },
        '&:nth-child(2)': {
            opacity: props.active && 0, 
            transform: props.active && "translateX(-100%)"
        },
    },
    [theme.breakpoints.up('md')]: {
        display: "none"
    },
}));

export const StyledSearch = styled(Box)(({ theme }) => ({
    maxWidth: "550px",
    width: "100%",
    position: "relative",
    display: "none", // Hide on mobile,
    [theme.breakpoints.up('sm')]: {
        display: "block"
    },
    marginLeft: theme.spacing(3),
    '& .MuiInputBase-root': {
        width: "100%",
        '& .MuiInputBase-input': {
            background: theme.palette.grey.main,
            padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(4)} `,
            borderRadius: 25,
            display: "block",
            width: "100%",
        }
    },
    '& .MuiSvgIcon-root': {
       position: "absolute",
       top: "50%",
       left: theme.spacing(1),
       transform: "translateY(-50%)",
       fill: theme.palette.common.black,
       opacity: "0.5"
    }
}))