import { Box, CircularProgress } from "@mui/material";

function WaitCircle() {
    return(
        <Box display="flex" justifyContent="center" alignContent="center" height="100%">
            <CircularProgress color="dark2"/>
        </Box>
    )
}

export default WaitCircle;