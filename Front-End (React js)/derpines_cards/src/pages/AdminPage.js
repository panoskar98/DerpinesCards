import { Box, Paper, ThemeProvider } from "@mui/material";
import SideBar from "../components/adminPageComponents/SideBar";
import customTheme from "../Themes/CustomTheme";
import Orders from "../components/adminPageComponents/Orders";
import { useEffect, useState } from "react";
import AddProducts from "../components/adminPageComponents/AddProducts";
import EditProducts from "../components/adminPageComponents/EditProducts";

const AdminPage = () => {
    const [option,setOption] = useState('orders')

    const getBody = () => {
        if(option === 'orders'){
            return <Orders/>
        }else if(option === 'addProduct'){
            return <AddProducts/>
        }else if(option === 'editProduct'){
            return <EditProducts/>
        }
    }

    useEffect(() =>{
        getBody();
    }, [option])

    return (
        <ThemeProvider theme={customTheme}>
            <Box height={"100%"} display={"flex"} flexDirection={"row"} gap={"10px"} sx={{ backgroundColor: customTheme.palette.dark2.main }}>
                <SideBar setOption={setOption} />
                <Paper elevation={5} sx={{ width: "100%", margin: "10px" }}>
                    <Box padding={2}>
                        {getBody()}
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    )
};

export default AdminPage;