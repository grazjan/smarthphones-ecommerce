import { createTheme } from '@mui/material'

/* Colors */
const colors = {
    primary: '#ff3838',
    secondary: '#ff9f1a',
    text: {
        primary: '#2d3436',
        icon: '#2d3436' 
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        },
        text: {
            primary: colors.text.primary,
            icon: colors.text.icon
        }
    },
})