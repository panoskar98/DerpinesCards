import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ParseComments from "../../generalFunctions/ParseComments";
import axios from "axios";
import { useState } from "react";

function OrderPreview() {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    const [deleteDialog, setDeleteDialog] = useState(false)

    const order = location.state.orders.find(order => order.orderId === Number(params.id));

    const completion = order.completed

    const commentsArray = ParseComments(order.customer.comments)
    console.log(completion)
    
    const setOrderCompletion = () => {
        axios.put(`http://localhost:4000/orders/${params.id}`, Boolean(!completion), {headers: {'Content-Type': 'application/json'}}).then(alert("order completion changed")).then(navigate("/admin/orders"))
    }

    const deleteOrder = () => {
        axios.delete(`http://localhost:4000/orders/${params.id}`).then(alert("Order Deleted")).then(navigate('/admin/orders'))
    }

    return (
        <Grid container gap={2} display="flex" justifyContent="center">
            <Grid item sm={12} display="flex" justifyContent="center" gap={2}>
                <Link to={'/admin/orders'}>
                <Button variant="contained" >Back</Button>
                </Link>
                <Button variant="contained" onClick={setOrderCompletion}>{order.completed ? "Order Completed" : "Order Incomplete"}</Button>
                <Button variant="contained" onClick={() => setDeleteDialog(true)}>Delete Order</Button>
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
            <Dialog
                open={deleteDialog}
                onClose={() => setDeleteDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                hideBackdrop={true}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this product?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting is irreversable
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="dark2" onClick={() => setDeleteDialog(false)}>Go Back</Button>
                    <Button color="dark2" onClick={deleteOrder} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
        
    )
}

export default OrderPreview;