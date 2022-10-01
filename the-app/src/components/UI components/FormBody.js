import Box from '@mui/material/Box';

const FormBody = ({ children, onSubmit }) => {

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                width: "355px",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "20px",
                margin: "20px 0",
                flexWrap: "wrap",
                borderRadius: "10px",
                boxShadow: "0 0 10px #4dabf5,0 0 10px #4dabf5,0 0 10px #4dabf5",
                boxSizing: "border-box",
                minHeight: "120px",
                bgcolor: '#e0f7fa',
            }}
            onSubmit={onSubmit}
            autoComplete="off"
        >
            {children}
        </Box >
    )
}

export default FormBody;