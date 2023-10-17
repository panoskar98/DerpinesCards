import { Box, Button, Paper, Typography, colors } from "@mui/material";
import customTheme from "../../Themes/CustomTheme";

function SideBar(props) {

    return (
        <Box width={"30vh"} height={"100%"} display={"flex"}>
            <Paper elevation={5} sx={{ width: "30vh", margin: "10px", padding: "10px", backgroundColor: customTheme.palette.primary.main}}>
            <Typography align="center">
                Admin Panel
            </Typography>
            <Button onClick={() => {props.setOption('orders')}} variant="outlined" color="dark2" sx={{width: "100%", marginTop: "10px", backgroundColor: customTheme.palette.secondary.main}}>
                Orders
            </Button>
            <Button onClick={() => {props.setOption('addProduct')}} variant="outlined" color="dark2" sx={{width: "100%", marginTop: "10px", backgroundColor: customTheme.palette.secondary.main}}>
                Add Product
            </Button>
            <Button onClick={() => {props.setOption('editProduct')}} variant="outlined" color="dark2" sx={{width: "100%", marginTop: "10px", backgroundColor: customTheme.palette.secondary.main}}>
                Edit Product
            </Button>
        </Paper>
        </Box>
    );
}

export default SideBar;