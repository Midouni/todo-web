import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Palette {
        label: Palette['primary'];
    }
    interface PaletteOptions {
        label: PaletteOptions['primary'];
    }
    interface Palette {
        link: Palette['primary'];
    }
    interface PaletteOptions {
        link: PaletteOptions['primary'];
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: 'Mark Pro, Arial',
        h1: {
            fontSize: 22,
            fontWeight: 'bold',
        },
        h2: {
            fontSize: 16,
            fontWeight: 'normal',
        },
        body1: {
            fontSize: 16,
        },
        button: {
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 'normal'
        }
    },
    palette: {
        primary: {
            main: '#4a77e5',
        },
        label: {
            main: '#9ea3b2',
        },
        link: {
            main: '#1f2a4b',
        }
    }
})