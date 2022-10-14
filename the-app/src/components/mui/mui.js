import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1B3764',
        },
        secondary: {
            main: '#FFCA42',
        },
    },
    components: {
        MuiPagination: {
            styleOverrides: {
                root: {
                    color: "#f8d862",
                    maxWidth: "365px",
                    margin: "20px 0 0"
                },
                outlined: {
                    color: "#f8d862",
                },
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    color: "#1B3764",
                    fontSize: "20px",
                    fontWeight: "700",
                    border: "2px solid #1B3764"
                },
                icon: {
                    color: "#1B3764",
                    fontSize: "30px",
                    fontWeight: "700",
                },
            }
        },
    }
})
