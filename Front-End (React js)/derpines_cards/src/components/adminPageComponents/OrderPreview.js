import { Avatar, Box, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import ParseComments from "../../generalFunctions/ParseComments";

function OrderPreview() {
    const location = useLocation()
    const params = useParams()

    const order = location.state.orders.find(order => order.orderId === Number(params.id));

    const commentsArray = ParseComments(order.customer.comments)
    console.log(commentsArray)

    return (
        <Grid container gap={2} display="flex" justifyContent="center">
            <Grid item sm={12} display="flex" justifyContent="center" gap={2}>
                <Button variant="contained" >Back</Button>
                <Button variant="contained">Complete Order</Button>
                <Button variant="contained" >Delete Order</Button>
            </Grid>
            <Grid item sm={12} md={5}>
                <Box className="glass" padding={2} height="auto">
                    <Typography variant="h5" align="center">
                        Customer Details
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem>
                            <ListItemText>
                                {"Name: " + order.customer.name}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {"Surname: " + order.customer.surname}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {"Email: " + order.customer.email}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {"Address: " + order.customer.address}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {"Phone Number: " + order.customer.phoneNumber}
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item sm={12} md={5}>
                <Box className="glass" padding={2}>
                    <Typography variant="h5" align="center">
                        Products
                    </Typography>
                    <Divider />
                    {order.ordersProducts.map((product) => {
                        return (
                            <Box>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Avatar src={product.img} />
                                        </ListItemIcon>
                                        <ListItemText sx={{ fontWeight: "bold" }}>
                                            {product.title}
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText>
                                            {"Weight: " + product.weight}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            {"Color: " + product.colour}
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Comments:
                                        </ListItemText>
                                        <ListItemText>
                                            {commentsArray.find((comment) => comment.product === product.title).comment}
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        )
                    })}
                </Box>
            </Grid>
        </Grid>
    )
}

export default OrderPreview;