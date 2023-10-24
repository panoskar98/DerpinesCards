import { Box, Paper, ThemeProvider } from "@mui/material";
import SideBar from "../components/adminPageComponents/SideBar";
import customTheme from "../Themes/CustomTheme";
import Orders from "../components/adminPageComponents/Orders";
import { useEffect, useState } from "react";
import AddProducts from "../components/adminPageComponents/AddProducts";
import EditProducts from "../components/adminPageComponents/EditProducts";
import { Route, Routes, useNavigate } from "react-router-dom";

const AdminPage = () => {
    const [option,setOption] = useState('orders')
    const navigate = useNavigate()

    const getBody = () => {
        if(option === 'orders'){
            navigate('/admin/orders')
        }else if(option === 'addProduct'){
            navigate('/admin/addProduct')
        }else if(option === 'editProduct'){
            navigate('/admin/editProduct')
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
                        <Routes>
                            <Route path="/orders" element={<Orders />}/>
                            <Route path="/addProduct" element={<AddProducts/>}/>
                            <Route path="/editProduct" element={<EditProducts/>}/>
                        </Routes>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    )
};

export default AdminPage;