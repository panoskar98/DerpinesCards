import { ThemeProvider } from "@emotion/react";
import customTheme from "../Themes/CustomTheme";
import { Box, Button, ButtonGroup, Container, Divider, Grid, List, ListItem, ListItemText, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import DataContext from "../DataContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"
import axios from "axios";

function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const { customerInfo, setCustomerInfo, orderProductIds, products, totalPrice } = useContext(DataContext)
    const [customerResponse, setCustomerResponse] = useState(null)
    const navigate = useNavigate();

    const addCustomer = () => {
        axios.post("http://localhost:4000/customers", customerInfo).then((response) => setCustomerResponse(response.data))
    }
    const addOrder = () => {
        axios.post(`http://localhost:4000/orders/customer/${customerResponse.customerId}`, orderProductIds).then(() => alert("Order Sent! Thank you"))
    }

    const placeOrder = () => {
        addCustomer();
        addOrder();
    }

    return (
        <ThemeProvider theme={customTheme}>
            <Box className="gradient-background" height="100%" paddingY="10px" display="flex" flexDirection="column" minHeight="100vh">
                <Container maxwidth="lg">
                    <Box className="glass" padding={3}>
                        <Box display="flex" justifyContent="center">
                            <img style={{ height: "100px" }} src={logo} alt="logo" onClick={() => navigate('/products')} />
                        </Box>
                        <Stepper activeStep={activeStep}>
                            <Step>
                                <StepLabel>
                                    <Typography variant="h5">
                                        Customer Info
                                    </Typography>
                                </StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>
                                    <Typography variant="h5">
                                        Checkout
                                    </Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                        <Box marginTop={4}>
                            {activeStep === 0 && (
                                <Grid container spacing={2}>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <TextField
                                            label="Name"
                                            value={customerInfo.name}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <TextField
                                            label="Surname"
                                            value={customerInfo.surname}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, surname: e.target.value })}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <TextField
                                            label="Address"
                                            value={customerInfo.address}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <TextField
                                            label="Email"
                                            value={customerInfo.email}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="center">
                                        <TextField
                                            label="Phone Number"
                                            value={customerInfo.phoneNumber}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12} display="flex" justifyContent="right">
                                        <Button variant="contained" onClick={() => setActiveStep(1)}>
                                            Next
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}
                            {activeStep === 1 && (
                                <Box>
                                    <Container>
                                    <Typography variant="h5">
                                        Customer
                                    </Typography>
                                    <Divider/>
                                    <List >
                                        <ListItem>
                                            <ListItemText>
                                                {"Name: " + customerInfo.name}
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                {"Surname: " + customerInfo.surname}
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                {"Address: " + customerInfo.address}
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                {"Email: " + customerInfo.email}
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                {"Phone Number: " + customerInfo.phoneNumber}
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <Typography variant="h5">
                                        Products
                                    </Typography>
                                    <Divider/>
                                    <List>
                                        {orderProductIds.map((id, index) => {
                                            const product = products.find(prod => prod.productId === id)
                                            return(
                                                <ListItem>
                                                    <ListItemText>
                                                        {index+1 + ". " + product.title + " " + product.price + "€"}
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                        })}
                                    </List>
                                    <Divider/>
                                    <Typography>
                                        {"Total: " + totalPrice + "€"}
                                    </Typography>
                                    <Box display="flex" justifyContent="right">
                                        <ButtonGroup >
                                            <Button variant="contained" onClick={() => setActiveStep(0)}>
                                                Back
                                            </Button>
                                            <Button variant="contained" onClick={placeOrder}>
                                                Place Order
                                            </Button>
                                        </ButtonGroup>
                                    </Box>
                                    </Container>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>

    )
}

export default Checkout;